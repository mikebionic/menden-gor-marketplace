import { get_local_data_by_key } from 'sapredux/helpers'

export const authBearerHeader = (key = 'user') => {

	const user = get_local_data_by_key(key);

	if (user && user.token) {
		return {'Authorization': `Bearer ${user.token}`};
	} 
	// else {
	// 	// !!!TODO: retry login to refresh token here
	// 	// window.location.pathname = '/logout'
	// }
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