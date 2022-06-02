import { resourceCollectionConstants as actionConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false, data: {} }

export const resourceCollection = (
	state = initialState,
	{ type, payload }: any,
) => {
	switch (type) {
		case actionConstants.FETCH_SUCCESS:
			const newState = {
				loading: false,
				error: false,
				data: payload,
			}
			return R.mergeRight(state, newState)

		case actionConstants.FETCH_START:
			return {
				loading: true,
				error: false,
			}

		case actionConstants.FETCH_FAILURE:
			return {
				loading: false,
				error: true,
			}

		default:
			return state
	}
}
