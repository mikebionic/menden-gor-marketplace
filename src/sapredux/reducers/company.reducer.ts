import { companyConstants as actionConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = {
	loading: false,
	error: false,
	data: {
		email: null,
		webAddress: null,
		phone1: null,
	},
}

export const company = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case actionConstants.FETCH_SUCCESS:
			return R.mergeRight(state, {
				loading: false,
				error: false,
				data: payload,
			})

		case actionConstants.FETCH_START:
			return R.mergeRight(state, {
				loading: true,
				error: false,
			})

		case actionConstants.FETCH_FAILURE:
			return R.mergeRight(state, {
				loading: false,
				error: true,
			})

		default:
			return state
	}
}
