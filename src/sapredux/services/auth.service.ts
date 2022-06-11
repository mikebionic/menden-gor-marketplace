import { serviceConfig } from 'configs'

import { authBearerHeaderAsync, handleResponse } from 'sapredux/helpers'
import {
	rp_acc_basic_login_credentials,
	rp_acc_basic_login_success,
	rp_acc_basic_login_failure,
} from './mock_data/auth.mock'
import { fetchWithCred } from 'sapredux/helpers'
import { transformAuth as transformResponse, transformRpAcc } from './transform_data'

const login_request = (username = '', password = '', authMethod = 'email') => {
	if (serviceConfig.useMockApi) {
		if (
			username === rp_acc_basic_login_credentials.username &&
			password === rp_acc_basic_login_credentials.password
		) {
			return Promise.resolve(rp_acc_basic_login_success)
		} else {
			return Promise.reject(rp_acc_basic_login_failure.message)
		}
	}

	const auth_header =
		username.length > 0 && password.length > 0
			? btoa(`${username}:${password}`)
			: ''
	if (!auth_header) {
		return Promise.reject('Fill the required fields!')
	}

	const requestOptions: any = {
		headers: {
			Authorization: `Basic ${auth_header}`,
		},
	}

	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.login}?type=rp_acc&method=${authMethod}`,
		requestOptions,
	).then(handleResponse)
}

const login = async (
	username: string,
	password: string,
	authMethod: string,
) => {
	return await login_request(username, password, authMethod).then(
		(response: any) => ({
			status: response.status,
			message: response.message,
			...transformResponse(response, authMethod)
		})
	)
}

const logout = () => {
	localStorage.removeItem('user')
	// !!! Warning: session is not removing
	document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

const registerRequest = async (authMethod: string, payload: string) => {
	let headers =
		authMethod === 'email'
			? { Email: payload }
			: authMethod === 'phone_number' && { PhoneNumber: payload }

	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.register_request}?method=${authMethod}`,
		{ headers: headers },
	).then(handleResponse)
}

const verifyRegister = async (authMethod: string, payload: any) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.verify_register}?method=${authMethod}`,
		requestOptions,
	).then(handleResponse)
}

const register_rp_acc = async (
	authMethod: string,
	registerToken: string,
	payload: any,
) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			Token: registerToken,
		},
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.register}?method=${authMethod}&type=rp_acc`,
		requestOptions,
	)
		.then(handleResponse)
		.then((response: any) => ({
			status: response.status,
			message: response.message,
			...transformResponse(response, authMethod),
		}))
}

const loginRequest = async (authMethod: string, payload: string) => {
	let headers =
		authMethod === 'email'
			? { Email: payload }
			: authMethod === 'phone_number' && { PhoneNumber: payload }

	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.login_request_route}?method=${authMethod}`,
		{ headers: headers },
	).then(handleResponse)
}

const verifyLogin = async (authMethod: string, payload: any) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.verify_login}?method=${authMethod}&type=rp_acc`,
		requestOptions,
	)
		.then(handleResponse)
		.then((response: any) => ({
			status: response.status,
			message: response.message,
			...transformResponse(response, authMethod)	
		}))
}

const resetPassword = async (payload: any) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			...(await authBearerHeaderAsync()),
		},
	}
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.reset_password}?type=rp_acc`,
		requestOptions,
	).then(handleResponse)
	.then((response: any) => ({
		status: response.status,
		message: response.message,
		...transformRpAcc(response.data)	
	}))
}

const editProfile = async (payload: any) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			...(await authBearerHeaderAsync()),
		},
	}
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.profile_edit}`,
		requestOptions,
	).then(handleResponse)
}

const updateAvatar = async (formData: any) => {
	const requestOptions = {
		method: 'POST',
		body: formData,
		headers: {
			...(await authBearerHeaderAsync()),
		},
	}
	return await fetchWithCred(
		`${serviceConfig.apiUrl}/v1/update-avatar/`,
		requestOptions,
	).then(handleResponse)
}

const googleAuth = async (payload: any) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	}

	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.google_auth}?type=rp_acc`,
		requestOptions,
	)
		.then(handleResponse)
		.then((response: any) => ({
			status: response.status,
			message: response.message,
			...transformResponse(response,"email"),
		}))
}

export const authService = {
	login,
	logout,
	registerRequest,
	verifyRegister,
	editProfile,
	register_rp_acc,
	googleAuth,
	updateAvatar,
	loginRequest,
	verifyLogin,
	resetPassword,
}
