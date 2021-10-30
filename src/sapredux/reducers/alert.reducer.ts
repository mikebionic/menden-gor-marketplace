import { alertConstants } from 'sapredux/constants';

export const alert = (state = {}, action: any) => {
	switch (action.type) {
		case alertConstants.SUCCESS:
			return {
				type: 'alert-success',
				message: action.message
			};
		case alertConstants.ERROR:
			return {
				type: 'alert-danger',
				message: action.message
			};
		case alertConstants.CLEAR:
			return {} as any
		default:
			return state
	}
}