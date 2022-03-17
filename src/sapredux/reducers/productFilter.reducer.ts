import * as R from 'ramda'
import { productFilterConstants as actionConstants } from 'sapredux/constants'

const initialState = {
	search: null,
	brand: null,
	category: null,
	fromPrice: null,
	toPrice: null,
	sort_type: "date_new",
	division: null,
 };

export const productFilter = (state = initialState, action: {[name: string]: any}) => {
	switch (action.type){
		case actionConstants.FILTER_UPDATE:
			const newState = R.mergeRight(state, action.payload)
		return newState

		case actionConstants.FILTER_CLEAR:
			return initialState

		default:
			return state
	}
}