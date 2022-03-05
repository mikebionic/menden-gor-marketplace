import { productFilterConstants as actionConstants } from 'sapredux/constants'

export const applyFilters = (data: any) => {
	return {
		type: actionConstants.FILTER_UPDATE,
    payload: data
  };
}



export const clearFilters = () => {
	return {
		type: actionConstants.FILTER_CLEAR,
    payload: null
  };
}