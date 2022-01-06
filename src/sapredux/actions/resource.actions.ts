
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

export const resourceAddedToCart = (id: number) => (dispatch:any) => {
	dispatch({
		type: actionConstants.ADDED_TO_CART,
    payload: id
  });
}

export const resourceRemovedFromCart = (id: number) => {
  return {
		type: actionConstants.REMOVED_FROM_CART,
    payload: id
  };
};

export const resourceAllRemovedFromCart = (id: number) => {
  return {
		type: actionConstants.ALL_REMOVED_FROM_CART,
    payload: id
  };
};