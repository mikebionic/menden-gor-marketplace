import { sliderConstants as actionConstants } from 'sapredux/constants'
import { sliderService as service } from 'sapredux/services'
import { transformSliders as transformResponse } from 'sapredux/services/transform_data'

export const fetchSliders = () => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START
	})
	try {
		const response = await service.fetchAll()
		const sliders = response.data.map(transformResponse)
		dispatch({
			type: actionConstants.FETCH_SUCCESS,
			payload: sliders
		})
	} catch (err) {
		dispatch({
			type: actionConstants.FETCH_FAILURE,
			payload: err,
			error: true
		})
	}
}