import { resourceCollectionConstants as actionConstants } from 'sapredux/constants'

import { resourceCollectionService as service } from 'sapredux/services'

export const fetchResourceCollections =
	(query_string = '') =>
	async (dispatch: any) => {
		dispatch({
			type: actionConstants.FETCH_START,
		})
		try {
			const data = await service.fetchAll_data(query_string)
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
