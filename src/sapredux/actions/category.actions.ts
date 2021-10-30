import { categoryConstants as actionConstants } from 'sapredux/constants'
import { categoryService as service } from 'sapredux/services'
import { transformCategories as transformResponse } from 'sapredux/services/transform_data'

export const fetchCategories = () => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START
	})
	try {
		const response = await service.fetchAll()
		const categories = response.data.map(transformResponse)
		dispatch({
			type: actionConstants.FETCH_SUCCESS,
			payload: categories
		})
	} catch (err) {
		dispatch({
			type: actionConstants.FETCH_FAILURE,
			payload: err,
			error: true
		})
	}
}