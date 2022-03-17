import * as R from 'ramda'

export const getCategoryById = (data: any, id: number) => R.prop(id, data)

export const getCategories = (state: any) => {
	const categories = state.category && !!state.category.data ? R.map((id: number) => getCategoryById(state.category.data, id), state.categoryPage.ids) : []
	return categories
}