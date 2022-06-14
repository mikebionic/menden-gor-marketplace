import {
	resourceConstants as actionConstants,
	resourceCollectionConstants,
} from 'sapredux/constants'
import * as R from 'ramda'

const initialState = { loading: false, error: false, data: {} }

export const resource = (state = initialState, { type, payload }: any) => {
	let moreValues = {}
	switch (type) {
		case actionConstants.FETCH_SUCCESS:
			const newState = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), payload),
				),
			}
			return R.mergeRight(state, newState)

		case actionConstants.LOAD_MORE_SUCCESS:
			moreValues = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), payload),
				),
			}
			return R.mergeRight(state, moreValues)

		case actionConstants.FEATURED_FETCH_SUCCESS:
			moreValues = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), payload),
				),
			}
			return R.mergeRight(state, moreValues)

		case actionConstants.DISCOUNT_FETCH_SUCCESS:
			moreValues = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), payload),
				),
			}
			return R.mergeRight(state, moreValues)

		case actionConstants.LATEST_FETCH_SUCCESS:
			moreValues = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), payload),
				),
			}
			return R.mergeRight(state, moreValues)

		case actionConstants.WISHLIST_FETCH_SUCCESS:
			moreValues = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), payload),
				),
			}
			return R.mergeRight(state, moreValues)

		case resourceCollectionConstants.FETCH_SUCCESS:
			let resources: any = []
			payload.map((item: any) => {
				item.resources.map((resource: any) => resources.push(resource))
			})
			moreValues = {
				loading: false,
				error: false,
				data: R.mergeRight(
					state.data,
					R.indexBy(R.prop<string, string>('id'), resources),
				),
			}
			return R.mergeRight(state, moreValues)

		case actionConstants.FETCH_BY_ID_SUCCESS:
			return R.mergeRight(state, {
				...state,
				data: R.assoc(payload.id, payload, state.data),
			})

		case actionConstants.FETCH_START:
			return R.mergeRight(state, { loading: true, error: false })

		case actionConstants.FETCH_FAILURE:
			return R.mergeRight(state, { loading: false, error: true })

		default:
			return state
	}
}
