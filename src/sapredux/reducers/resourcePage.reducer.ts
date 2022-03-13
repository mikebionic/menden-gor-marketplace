import * as R from 'ramda'

import { resourceConstants } from 'sapredux/constants'

const initialState = {
	id: null
}

export const resourcePage = (state = initialState, {type, payload}: any) => {
	switch (type) {
		case resourceConstants.FETCH_BY_ID_SUCCESS:
			return R.mergeLeft(state, {
				id: R.prop('id', payload)
			})
		default:
			return state
	}
}