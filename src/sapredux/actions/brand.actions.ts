import { brandConstants as actionConstants } from 'sapredux/constants'
import { brandService as service } from 'sapredux/services'
import { transformBrands as transformResponse } from 'sapredux/services/transform_data'

export const fetchBrands = () => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START
	})
	try {
		const response = await service.fetchAll()
		const data = response.data.map(transformResponse)
		dispatch({
			type: actionConstants.FETCH_SUCCESS,
			payload: data
		})
	} catch (err) {
		dispatch({
			type: actionConstants.FETCH_FAILURE,
			payload: err,
			error: true
		})
	}
}