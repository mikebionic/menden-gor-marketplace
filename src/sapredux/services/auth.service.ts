import { serviceConfig } from 'configs';
import { set_local_data_by_key } from 'sapredux/helpers'
import { handleResponse } from 'sapredux/helpers';
import {
	rp_acc_basic_login_credentials,
	rp_acc_basic_login_success,
	rp_acc_basic_login_failure
} from './mock_data/auth.mock'


const login = (username='', password='') => {

	if (serviceConfig.useMockApi){
		if (username === rp_acc_basic_login_credentials.username
			&& password === rp_acc_basic_login_credentials.password){
			return Promise.resolve(rp_acc_basic_login_success)
				.then(user => {
					set_local_data_by_key('user', user)
					return user;
				});
		} else {
			return Promise.reject(rp_acc_basic_login_failure.message)
		}
	}

	const auth_header = (username.length > 0 && password.length > 0) ?
		btoa(`${username}:${password}`) : ""

	if (!auth_header) {
		return Promise.reject("Fill the required fields!");
	}

	const requestOptions = {
		method: 'GET',
		headers: {
			"Authorization": `Basic ${auth_header}`,
		}
	};

	return fetch(`${serviceConfig.apiUrl}/login/?type=rp_acc`, requestOptions).then(handleResponse)
}
	
const logout = () => {
	localStorage.removeItem('user');
}

export const authService = {
	login,
	logout
};