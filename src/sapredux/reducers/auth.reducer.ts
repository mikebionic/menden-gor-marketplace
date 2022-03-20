import * as R from 'ramda'

import { authConstants } from 'sapredux/constants';
import { get_local_data_by_key, set_local_data_by_key } from 'sapredux/helpers'

const user = get_local_data_by_key('user');
const initialState = !R.isEmpty(user)
	? { loggedIn: true, loading: false, error:false, data: user }
	: { loggedIn: false, loading: false, error:false, data: {} };


export const auth = (state = initialState, {type, payload}:any) => {
	switch (type) {
		case authConstants.LOGIN_REQUEST:
			return {
				loggedIn: false,
				loading: true,
				error: false,
				data: {}
			};
		case authConstants.LOGIN_SUCCESS:
			set_local_data_by_key('user', payload)
			return {
				loggedIn: true,
				loading: false,
				error: false,
				data: payload
			};
		case authConstants.LOGIN_FAILURE:
			return {
				loggedIn: false,
				loading: false,
				error: true,
				data: payload ?? {}
			};
		case authConstants.LOGOUT:
			return {
				loggedIn: false,
				loading: false,
				error: false,
				data: {}
			};
		// case authConstants.UPDATE_REDUCER:
		// 	set_local_data_by_key('user', payload)
		// 	return {
		// 		loggedIn: true,
		// 		loading: false,
		// 		data: payload
		// 	};
		default:
			return state
	}
}