import { alertConstants } from 'sapredux/constants';

export const alert = (state = {}, {type, message}: any) => {
	switch (type) {
		case alertConstants.SUCCESS:
			return {
				type: 'alert-success',
				message: message
			};
		case alertConstants.ERROR:
			return {
				type: 'alert-danger',
				message: message
			};
		case alertConstants.CLEAR:
			return {} as any
		default:
			return state
	}
}