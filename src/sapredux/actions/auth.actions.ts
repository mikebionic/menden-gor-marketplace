import { authConstants } from 'sapredux/constants';
import { authService } from 'sapredux/services';
import { showToastMessage } from "sapredux/helpers"
import { alertActions } from '.';

const login = (username: string, password: string, withToastMessage:boolean = true) => {
	return (dispatch: any) => {
		dispatch(request({ username }));
		authService.login(username, password).then(
			(response: any) => {
				dispatch(success(response));
				withToastMessage && showToastMessage({type:"success", message:`${username}, You have successfully logged in!`})
			},
			(error: any) => {
				dispatch(failure(error.toString()));
				withToastMessage && showToastMessage({type:"error", message:error.toString()})
				dispatch(alertActions.error(error.toString()));
			}
		);
	};

	function request(user: any) { return { type: authConstants.LOGIN_REQUEST, payload: user } }
	function success(user: any) { return { type: authConstants.LOGIN_SUCCESS, payload: user } }
	function failure(error: any) { return { type: authConstants.LOGIN_FAILURE, payload: error } }
}

const logout = (withToastMessage:boolean = true) => {
	authService.logout();
	withToastMessage && showToastMessage({type:"success", 0:"You have successfully logged out!"})
	return { type: authConstants.LOGOUT };
}

export const profileUpdate = (data:any) => ({type: authConstants.PROFILE_UPDATE, payload: data})

export const authActions = {
	login,
	logout,
	profileUpdate,
};
