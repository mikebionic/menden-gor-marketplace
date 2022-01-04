
import { resourceConstants as actionConstants } from 'sapredux/constants'
import { resourceService as service } from 'sapredux/services'
import { transformResources as transformResponse } from 'sapredux/services/transform_data'

export const fetchResources = () => async (dispatch: any) => {
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

export const resourceAddedToCart = (resId: number) => {
	return {
		type: actionConstants.ADDED_TO_CART,
    payload: resId
  };
}

export const resourceRemovedFromCart = (resId: number) => {
  return {
		type: actionConstants.REMOVED_FROM_CART,
    payload: resId
  };
};

export const resourceAllRemovedFromCart = (resId: number) => {
  return {
		type: actionConstants.ALL_REMOVED_FROM_CART,
    payload: resId
  };
};