import { serviceConfig } from 'configs';

import { handleResponse } from 'sapredux/helpers';
import {
	rp_acc_basic_login_credentials,
	rp_acc_basic_login_success,
	rp_acc_basic_login_failure
} from './mock_data/auth.mock'
import { fetchWithCred } from 'sapredux/helpers'
import { transformAuth as transformResponse } from './transform_data';


const login_request = (username='', password='') => {
	if (serviceConfig.useMockApi){
		if (username === rp_acc_basic_login_credentials.username
			&& password === rp_acc_basic_login_credentials.password){
			return Promise.resolve(rp_acc_basic_login_success)
		} else {
			return Promise.reject(rp_acc_basic_login_failure.message)
		}
	}

	const auth_header = (username.length > 0 && password.length > 0) ?
		btoa(`${username}:${password}`) : ""
	if (!auth_header) {
		return Promise.reject("Fill the required fields!");
	}

	const requestOptions: any = {
		headers: {
			"Authorization": `Basic ${auth_header}`,
		},
	};

	return fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.login}?type=rp_acc`, requestOptions).then(handleResponse)
}

const login = async(username:string, password:string) => {
	return await login_request(username, password)
		.then((response:any) => ({ ...transformResponse(response), auth_username: username, auth_password: password }))
}

const logout = () => {
	localStorage.removeItem('user');
	document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

export const authService = {
	login,
	logout
};