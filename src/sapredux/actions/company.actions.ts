import { companyConstants as actionConstants } from 'sapredux/constants'
import { otherService as service } from 'sapredux/services'

export const fetchCompanyInfo = () => async (dispatch: any) => {
	dispatch({
		type: actionConstants.FETCH_START,
	})
	try {
		const data = await service.fetch_company_info()
		dispatch({
			type: actionConstants.FETCH_SUCCESS,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: actionConstants.FETCH_FAILURE,
			payload: err,
		})
	}
}
