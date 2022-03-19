import * as R from 'ramda'

import { authConstants } from 'sapredux/constants';
import { get_local_data_by_key, set_local_data_by_key } from 'sapredux/helpers'

const user = get_local_data_by_key('user');
const initialState = !R.isEmpty(user)
	? { loggedIn: true, loading: false, error:false, user: user }
	: { loggedIn: false, loading: false, error:false, user: {} };


export const auth = (state = initialState, {type, payload}:any) => {
	switch (type) {
		case authConstants.LOGIN_REQUEST:
			return {
				loggedIn: false,
				loading: true,
				data: {}
			};
		case authConstants.LOGIN_SUCCESS:
			set_local_data_by_key('user', payload)
			return {
				loggedIn: true,
				loading: false,
				data: payload
			};
		case authConstants.LOGIN_FAILURE:
			return {
				loggedIn: false,
				loading: false,
				data: {}
			};
		case authConstants.LOGOUT:
			return {
				loggedIn: false,
				loading: false,
				data: {}
			};;
		default:
			return state
	}
}