import { authConstants } from 'sapredux/constants'
import { authService } from 'sapredux/services'
import { sapswal, showToastMessage } from 'sapredux/helpers'
import { alertActions } from '.'

const login = (
	username: string,
	password: string,
	authMethod: string = 'email',
	withToastMessage: boolean = true,
) => {
	return (dispatch: any) => {
		dispatch(request({ username }))
		authService.login(username, password, authMethod).then(
			(response: any) => {
				dispatch(success(response))
				withToastMessage &&
					showToastMessage({
						type: 'success',
						message: `${username}, You have successfully logged in!`,
					})
			},
			(error: any) => {
				dispatch(failure(error.toString()))
				withToastMessage &&
					showToastMessage({ type: 'error', message: error.toString() })
				dispatch(alertActions.error(error.toString()))
			},
		)
	}

	function request(user: any) {
		return { type: authConstants.LOGIN_REQUEST, payload: user }
	}
	function success(user: any) {
		return { type: authConstants.LOGIN_SUCCESS, payload: user }
	}
	function failure(error: any) {
		return { type: authConstants.LOGIN_FAILURE, payload: error }
	}
}

const logout = (withToastMessage: boolean = true) => {
	authService.logout()
	withToastMessage &&
		showToastMessage({
			type: 'success',
			0: 'You have successfully logged out!',
		})
	return { type: authConstants.LOGOUT }
}

export const profileUpdate = (data: any) => ({
	type: authConstants.PROFILE_UPDATE,
	payload: data,
})

export const register_rp_acc = (
	authMethod: string,
	registerToken: string,
	payload: any,
	withToastMessage: boolean = true,
	set_loading: any,
) => {
	return (dispatch: any) => {
		authService.register_rp_acc(authMethod, registerToken, payload).then(
			(response: any) => {
				set_loading(false)
				response.status === 1 &&
					dispatch(
						success({
							...response,
							authMethod: authMethod,
							auth_username: payload.username,
							auth_password: payload.password,
						}),
					)
				withToastMessage &&
					showToastMessage({
						type: response.status === 1 ? 'success' : 'error',
						message: response.message,
						position: 'right-top',
					})
			},
			(error: any) => {
				set_loading(false)
				dispatch(failure(error.toString()))
				withToastMessage &&
					showToastMessage({
						type: 'error',
						message: error.toString(),
						position: 'center-top',
					})
				dispatch(alertActions.error(error.toString()))
			},
		)
	}

	function success(user: any) {
		return { type: authConstants.LOGIN_SUCCESS, payload: user }
	}
	function failure(error: any) {
		return { type: authConstants.LOGIN_FAILURE, payload: error }
	}
}

const googleAuth = (
	payload: any,
	set_loading: any,
	withToastMessage: boolean = true,
) => {
	return (dispatch: any) => {
		dispatch(request(payload))
		authService.googleAuth(payload).then(
			(response: any) => {
				set_loading(false)
				response.status === 1 && dispatch(success(response))
				withToastMessage &&
					showToastMessage({
						type: response.status === 1 ? 'success' : 'error',
						message: response.message,
						position: 'center-top',
					})
			},
			(error: any) => {
				set_loading(false)
				dispatch(failure(error.toString()))
				withToastMessage &&
					sapswal.fire({ text: error.toString(), icon: 'error' })
				dispatch(alertActions.error(error.toString()))
			},
		)
	}

	function request(user: any) {
		return { type: authConstants.LOGIN_REQUEST, payload: user }
	}
	function success(user: any) {
		return { type: authConstants.LOGIN_SUCCESS, payload: user }
	}
	function failure(error: any) {
		return { type: authConstants.LOGIN_FAILURE, payload: error }
	}
}

export const resetPassword = (payload: any) => {
	return (dispatch: any) => {
		authService.resetPassword(payload).then(
			(response: any) => {
				response.status === 1 && dispatch(success(response))
				sapswal.fire({
					icon: response.status === 1 ? 'success' : 'error',
					title: response.status === 1 ? 'Success' : 'Error',
					text: response.message,
				})
			},
			(error: any) =>
				showToastMessage({
					type: 'error',
					message: error.toString(),
					position: 'center-top',
				}),
		)
	}

	function success(data: string) {
		return { type: authConstants.RESET_PASSWORD, payload: data }
	}
}

export const verifyLogin = (
	authMethod: string,
	payload: any,
	withToastMessage: boolean = true,
) => {
	return (dispatch: any) => {
		authService.verifyLogin(authMethod, payload).then(
			(response: any) => {
				response.status === 1 && dispatch(success(response))
				withToastMessage &&
					showToastMessage({
						type: response.status === 1 ? 'success' : 'error',
						message: response.message,
						position: 'center-top',
					})
			},
			(error: any) => {
				dispatch(failure(error.toString()))
				withToastMessage &&
					showToastMessage({
						type: 'error',
						message: error.toString(),
						position: 'center-top',
					})
				dispatch(alertActions.error(error.toString()))
			},
		)
	}

	function success(user: any) {
		return { type: authConstants.LOGIN_SUCCESS, payload: user }
	}
	function failure(error: any) {
		return { type: authConstants.LOGIN_FAILURE, payload: error }
	}
}

export const authActions = {
	login,
	logout,
	profileUpdate,
	register_rp_acc,
	googleAuth,
	resetPassword,
	verifyLogin,
}
