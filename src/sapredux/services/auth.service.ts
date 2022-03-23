import { serviceConfig } from 'configs';

import { handleResponse } from 'sapredux/helpers';
import {
	rp_acc_basic_login_credentials,
	rp_acc_basic_login_success,
	rp_acc_basic_login_failure
} from './mock_data/auth.mock'
import { fetchWithCred } from 'sapredux/helpers'


const login = (username='', password='') => {
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
	
const logout = () => {
	localStorage.removeItem('user');
}

export const authService = {
	login,
	logout
};