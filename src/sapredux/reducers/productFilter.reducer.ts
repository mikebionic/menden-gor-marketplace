import * as R from 'ramda'
import { productFilterConstants as actionConstants } from 'sapredux/constants'
// import { history } from 'sapredux/helpers';

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
			const newState = R.merge(state, action.payload)
			// let search_querystring = `${history.location.pathname}?`
			// Object.keys(newState).map((key) => {
			// 	console.log(key, newState[key])
			// 	search_querystring += `${key}=${newState[key]}&`
			// })
			// history.push(search_querystring)
		return newState

		case actionConstants.FILTER_CLEAR:
			return initialState

		default:
			return state
	}
}