import { brandConstants as actionConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false };

export const brand = (state = initialState, action: {[name: string]: any}) => {
	switch (action.type){
		case actionConstants.FETCH_SUCCESS:
			const newValues = R.indexBy(R.prop<string, string>('id'), action.payload)
			const newState = {
				loading: false,
				error: false,
				data: newValues
			}
			return R.merge(state, newState)

		case actionConstants.FETCH_START:
			return {
				loading: true,
				error: false
			}

		case actionConstants.FETCH_FAILURE:
			return {
				loading: false,
				error: true
			}

		default:
			return state
	}
}