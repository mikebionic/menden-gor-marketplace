import { resourceConstants as actionConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false, data: [] };

export const resource = (state = initialState, action: {[name: string]: any}) => {
	let moreValues = {}
	switch (action.type){
		case actionConstants.FETCH_SUCCESS:
			const newState = {
				loading: false,
				error: false,
				data: R.mergeRight(state.data, R.indexBy(R.prop<string, string>('id'), action.payload))
			}
			return R.mergeRight(state, newState)

		case actionConstants.LOAD_MORE_SUCCESS:
			moreValues = {
				loading: false,
				error:false,
				data: R.mergeRight(state.data, R.indexBy(R.prop<string, string>('id'), action.payload))
			}
			return R.mergeRight(state, moreValues)

		case actionConstants.FEATURED_FETCH_SUCCESS:
			moreValues = {
				loading: false,
				error:false,
				data: R.mergeRight(state.data, R.indexBy(R.prop<string, string>('id'), action.payload))
			}
			return R.mergeRight(state, moreValues)
		
		case actionConstants.DISCOUNT_FETCH_SUCCESS:
			moreValues = {
				loading: false,
				error:false,
				data: R.mergeRight(state.data, R.indexBy(R.prop<string, string>('id'), action.payload))
			}
			return R.mergeRight(state, moreValues)
			
		case actionConstants.FETCH_BY_ID_SUCCESS:
			return R.assoc(action.payload.id, action.payload, state)

		case actionConstants.FETCH_START:
			return R.mergeRight(state, { loading: true, error: false })

		case actionConstants.FETCH_FAILURE:
			return R.mergeRight(state, { loading: false, error: true })

		default:
			return state
	}
}