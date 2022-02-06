import { sliderConstants } from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false };

export const slider = (state = initialState, action: {[name: string]: any}) => {
	switch (action.type){
		case sliderConstants.FETCH_SUCCESS:
			const newValues = R.indexBy(R.prop<string, string>('name'), action.payload)
			const newState = {
				loading: false,
				error: false,
				data: newValues
			}
			return R.merge(state, newState)

		case sliderConstants.FETCH_START:
			return {
				loading: true,
				error: false
			}

		case sliderConstants.FETCH_FAILURE:
			return {
				loading: false,
				error: true
			}

		default:
			return state
	}
}