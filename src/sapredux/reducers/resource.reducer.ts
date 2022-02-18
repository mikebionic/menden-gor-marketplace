import { resourceConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false };

export const resource = (state = initialState, action: {[name: string]: any}) => {
	switch (action.type){
		case resourceConstants.FETCH_SUCCESS:
			const newValues = R.indexBy(R.prop<string, string>('id'), action.payload)
			const newState = {
				loading: false,
				error: false,
				data: newValues
			}
			return R.merge(state, newState)

		case resourceConstants.LOAD_MORE_SUCCESS:
			const moreValues = R.indexBy(R.prop<string, string>('id'), action.payload)
			return R.merge(state, moreValues)

		case resourceConstants.FETCH_BY_ID_SUCCESS:
			return R.assoc(action.payload.id, action.payload, state)

		case resourceConstants.FETCH_START:
			return {
				loading: true,
				error: false
			}

		case resourceConstants.FETCH_FAILURE:
			return {
				loading: false,
				error: true
			}

		default:
			return state
	}
}