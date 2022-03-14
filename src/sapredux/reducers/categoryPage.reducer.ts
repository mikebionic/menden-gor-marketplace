import * as R from 'ramda'

import { categoryConstants } from 'sapredux/constants'

const initialState = {
	ids: []
}

interface IAction {
	type: string,
	payload: Array<any>
}

export const categoryPage = (state = initialState, action: IAction) => {
	switch (action.type) {
		case categoryConstants.FETCH_SUCCESS:
			return R.mergeRight(state, {
				ids: R.pluck('id', action.payload)
			})
		default:
			return state
	}
}