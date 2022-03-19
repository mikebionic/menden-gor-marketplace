import { authConstants } from 'sapredux/constants';
import { authService } from 'sapredux/services';
import { showToastMessage } from "sapredux/helpers"
import { transformRpAcc } from 'sapredux/services/transform_data';
import { alertActions } from '.';

const login = (username: string, password: string) => {
	return (dispatch: any) => {
		dispatch(request({ username }));
		authService.login(username, password).then(
			(response: any) => {
				dispatch(success(transformRpAcc(response)));
				showToastMessage({type:"success", message:"You have successfully logged in!"})
			},
			(error: any) => {
				dispatch(failure(error.toString()));
				showToastMessage({type:"error", message:error.toString()})
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
	showToastMessage({type:"success", message:"You have successfully logged out!"})
	return { type: authConstants.LOGOUT };
}

export const authActions = {
	login,
	logout,
};
