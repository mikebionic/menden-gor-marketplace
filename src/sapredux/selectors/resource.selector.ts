import * as R from 'ramda'

export const getResourceById = (data: any, id: number) => R.prop(id, data)

export const getResources = (state: any) => {
	const resources = !!state.resource.data ? R.map((id: number) => getResourceById(state.resource.data, id), state.resourcePage.ids) : []
	return resources
}