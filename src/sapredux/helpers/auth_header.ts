import { get_local_data_by_key } from 'sapredux/helpers'

export const authBearerHeader = (key = 'user') => {
	const token = checkLoginAndGetToken(key)
	if (token) {
		return {'Authorization': `Bearer ${token}`};
	} 
	else {
		// !!!TODO: retry login to refresh token here
		// window.location.pathname = '/logout'
	}
}

export const checkLoginAndGetToken = (key = 'user') => {
	const user = get_local_data_by_key(key);
	if (user && user.token){
		const current_date = new Date()
		const exp_date = new Date(user.exp)
		// console.log(exp_date > current_date, exp_date, current_date)
		if (exp_date > current_date){
			return user.token
		} else {
			if (user.username && user.password){
				// make login request
			} else {
				// show toast unauth
			}
		}
	} else {
		//show toast unauth and remove local data
	}
	return null
}

export const authBasicHeader = (key = 'user') => {
	var response_header = {}
	const user = get_local_data_by_key(key);
	const authorization = btoa(`${user.username}:${user.password}`)

	if (user) {
		response_header = {'Authorization': `Basic ${authorization}`};
	}

	return response_header;
}