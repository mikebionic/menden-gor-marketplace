import { resourceConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false, data: [] };

export const resource = (state = initialState, action: {[name: string]: any}) => {
	switch (action.type){
		case resourceConstants.FETCH_SUCCESS:
			const newState = {
				loading: false,
				error: false,
				data: R.merge(state.data, R.indexBy(R.prop<string, string>('id'), action.payload))
			}
			return R.merge(state, newState)

		case resourceConstants.LOAD_MORE_SUCCESS:

			const moreValues = {
				loading: false,
				error:false,
				data: R.merge(state.data, R.indexBy(R.prop<string, string>('id'), action.payload))
			}
			return R.merge(state, moreValues)

		case resourceConstants.FETCH_BY_ID_SUCCESS:
			return R.assoc(action.payload.id, action.payload, state)

		case resourceConstants.FETCH_START:
			return R.merge(state, { loading: true, error: false })

		case resourceConstants.FETCH_FAILURE:
			return R.merge(state, { loading: false, error: true })

		default:
			return state
	}
}