import * as R from 'ramda'

import { resourceConstants as actionConstants } from 'sapredux/constants'

const initialState = {
	loading: false,
	error: false,
	ids: []
}

interface IAction {
	type: string,
	payload: Array<any>
}

export const resourcesPage = (state = initialState, {type, payload}: IAction) => {
	switch (type) {
		case actionConstants.FETCH_SUCCESS:
			return R.mergeRight(state, {
				ids: R.pluck('id', payload)
			})

		case actionConstants.LOAD_MORE_SUCCESS:
			const ids = R.pluck('id', payload)
			return R.mergeRight(state, {
				ids: R.concat(state.ids, ids)
			})

		default:
			return state
	}
}

export const discountResourceIds = (state = initialState, {type, payload}: IAction) => {
	switch (type) {
		case actionConstants.DISCOUNT_FETCH_SUCCESS:
			return R.mergeRight(state, {
				loading: false,
				error: false,
				ids: R.pluck('id', payload)
			})

		case actionConstants.DISCOUNT_FETCH_START:
			return R.mergeRight(state, { loading: true, error: false })

		case actionConstants.DISCOUNT_FETCH_FAILURE:
			return R.mergeRight(state, { loading: false, error: true })

		default:
			return state
	}
}

export const featuredResourceIds = (state = initialState, {type, payload}: IAction) => {
	switch (type) {
		case actionConstants.FEATURED_FETCH_SUCCESS:
			return R.mergeRight(state, {
				loading: false,
				error: false,
				ids: R.pluck('id', payload)
			})

		case actionConstants.FEATURED_FETCH_START:
			return R.mergeRight(state, { loading: true, error: false })

		case actionConstants.FEATURED_FETCH_FAILURE:
			return R.mergeRight(state, { loading: false, error: true })

		default:
			return state
	}
}