import { authConstants } from 'sapredux/constants';
import { authService } from 'sapredux/services';
import { alertActions } from '.';
import { routeConstants } from 'navigation/routeConstants'
import { history } from 'sapredux/helpers'


const login = (username: string, password: string) => {
	return (dispatch: any) => {
		dispatch(request({ username }));

		authService.login(username, password).then(
			(user: any) => {
				dispatch(success(user));
				history.push(routeConstants.root.route)
			},
			(error: any) => {
				dispatch(failure(error.toString()));
				dispatch(alertActions.error(error.toString()));
			}
		);
	};

	function request(user: any) { return { type: authConstants.LOGIN_REQUEST, user } }
	function success(user: any) { return { type: authConstants.LOGIN_SUCCESS, user } }
	function failure(error: any) { return { type: authConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
	authService.logout();
	return { type: authConstants.LOGOUT };
}

export const authActions = {
	login,
	logout,
};
