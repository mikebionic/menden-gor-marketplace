
import { resourceConstants as actionConstants, productFilterConstants } from 'sapredux/constants'
import { resourceService as service } from 'sapredux/services'
import { transformResources as transformResponse } from 'sapredux/services/transform_data'

export const fetchResources = (query_string = "") => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START
	})
	try {
		const response = await service.fetchAll(query_string)
		const data = response.data.map(transformResponse)
		dispatch({
			type: actionConstants.FETCH_SUCCESS,
			payload: data
		})
		response.next_url && dispatch({
			type: productFilterConstants.FILTER_UPDATE,
			payload: {next_url: response.next_url}
		})
	} catch (err) {
		dispatch({
			type: actionConstants.FETCH_FAILURE,
			payload: err,
			error: true
		})
	}
}

export const fetchResourceById = (id:number) => async (dispatch:any) => {
	dispatch({type: actionConstants.FETCH_BY_ID_START})
	try {
		const data = await service.fetchById_data(id)
		dispatch({
			type: actionConstants.FETCH_BY_ID_SUCCESS,
			payload: data
		})
	} catch (err:any) {
		dispatch({
			type: actionConstants.FETCH_BY_ID_FAILURE,
			error: true,
			payload: err
		})
	}
}


export const resourceAddedToCart = (id: number) => {
	return {
		type: actionConstants.ADDED_TO_CART,
    payload: id
  };
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