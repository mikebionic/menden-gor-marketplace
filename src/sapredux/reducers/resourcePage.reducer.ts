import * as R from 'ramda'

import { resourceConstants } from 'sapredux/constants'

const initialState = {
	ids: []
}

interface IAction {
	type: string,
	payload: Array<any>
}

export const resourcePage = (state = initialState, action: IAction) => {
	switch (action.type) {
		case resourceConstants.FETCH_SUCCESS:
			return R.merge(state, {
				ids: R.pluck('id', action.payload)
			})
		default:
			return state
	}
}