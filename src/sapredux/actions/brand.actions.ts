import { brandConstants as actionConstants } from 'sapredux/constants'
import { brandService as service } from 'sapredux/services'

export const fetchBrands = () => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START
	})
	try {
		const data = await service.fetchAll_data()
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