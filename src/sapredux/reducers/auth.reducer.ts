import { authConstants } from 'sapredux/constants';
import { get_local_data_by_key } from 'sapredux/helpers'

const user = get_local_data_by_key('user');
const initialState = !!user
	? { loggedIn: true, loading: false, error:false, user: user }
	: { loggedIn: false, loading: false, error:false, user: {} };

export const auth = (state = initialState, action: {[name: string]: string}) => {
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			return {
				loggedIn: false,
				loading: true,
				user: {}
			};
		case authConstants.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				loading: false,
				user: action.payload
			};
		case authConstants.LOGIN_FAILURE:
			return {
				loggedIn: false,
				loading: false,
				user: {}
			};;
		case authConstants.LOGOUT:
			return {
				loggedIn: false,
				loading: false,
				user: {}
			};;
		default:
			return state
	}
}