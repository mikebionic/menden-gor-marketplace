import { authConstants } from 'sapredux/constants';
import { authService } from 'sapredux/services';
import { alertActions } from '.';
import { routeConstants } from 'navigation/routeConstants'
import { useNavigate } from 'react-router-dom'
// import { history } from 'sapredux/helpers'


const login = (username: string, password: string) => {
	return (dispatch: any) => {
		dispatch(request({ username }));

		authService.login(username, password).then(
			(user: any) => {
				dispatch(success(user));
				const navigate = useNavigate()
				navigate(routeConstants.root.route)
				// history.push(routeConstants.root.route)
			},
			(error: any) => {
				dispatch(failure(error.toString()));
				dispatch(alertActions.error(error.toString()));
			}
		);
	};

	function request(user: any) { return { type: authConstants.LOGIN_REQUEST, payload: user } }
	function success(user: any) { return { type: authConstants.LOGIN_SUCCESS, payload: user } }
	function failure(error: any) { return { type: authConstants.LOGIN_FAILURE, payload: error } }
}

const logout = () => {
	authService.logout();
	return { type: authConstants.LOGOUT };
}

export const authActions = {
	login,
	logout,
};
