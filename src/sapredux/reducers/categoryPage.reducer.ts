import * as R from 'ramda'

import { categoryConstants } from 'sapredux/constants'

interface IAction {
	type: string,
	payload: Array<any>
}

const initialState = {
	ids: []
}

export const categoryPage = (state = initialState, {type, payload}: IAction) => {
	switch (type) {
		case categoryConstants.FETCH_SUCCESS:
			return R.mergeRight(state, {
				ids: R.pluck('id', payload)
			})
		default:
			return state
	}
}