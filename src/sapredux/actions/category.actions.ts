import { categoryConstants as actionConstants } from 'sapredux/constants'
import { categoryService as service } from 'sapredux/services'

export const fetchCategories = () => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START,
	})
	try {
		const data = await service.fetchAll_data()
		dispatch({
			type: actionConstants.FETCH_SUCCESS,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: actionConstants.FETCH_FAILURE,
			payload: err,
			error: true,
		})
	}
}
