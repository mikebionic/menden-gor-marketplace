import { authService } from 'sapredux/services'
import { authConstants } from 'sapredux/constants'
import { get_local_data_by_key } from 'sapredux/helpers'
import { store } from 'sapredux/helpers'

export const authBearerHeaderAsync = async (key = 'user') => {
	const token = await getTokenWithAuth(key)
	if (token) {
		return { Authorization: `Bearer ${token}` }
	}
	return {}
}

export const getTokenWithAuth = async (key = 'user', secondCheck = false) => {
	const user = get_local_data_by_key(key)
	let token: string = ''
	if (user && user.token) {
		const current_date = new Date()
		const exp_date = new Date(user.exp)
		if (exp_date > current_date) {
			token = user.token
			return token
		} else {
			if (!secondCheck) {
				if (user.auth_username && user.auth_password) {
					await authService.login(user.auth_username, user.auth_password).then(
						(response: any) => {
							store.dispatch({
								type: authConstants.LOGIN_SUCCESS,
								payload: response,
							})
						},
						(error: any) => {
							store.dispatch({
								type: authConstants.LOGIN_FAILURE,
								payload: error,
							})
						},
					)
					token = await getTokenWithAuth(key, (secondCheck = true))
				}
			}
		}
	}
	return token
}

export const authBearerHeader = (key = 'user') => {
	const token = checkLoginAndGetToken(key)
	if (token) {
		return { Authorization: `Bearer ${token}` }
	}
	return {}
}

export const checkLoginAndGetToken = (key = 'user') => {
	const user = get_local_data_by_key(key)
	if (user && user.token) {
		const current_date = new Date()
		const exp_date = new Date(user.exp)
		if (exp_date > current_date) {
			return user.token
		}
	}
	return ''
}

export const authBasicHeader = (key = 'user') => {
	var response_header = {}
	const user = get_local_data_by_key(key)
	const authorization = btoa(`${user.auth_username}:${user.auth_password}`)

	if (user) {
		response_header = { Authorization: `Basic ${authorization}` }
	}

	return response_header
}
