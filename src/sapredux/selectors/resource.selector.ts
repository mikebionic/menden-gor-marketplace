import * as R from 'ramda'

export const getResourceById = (data: any, id: number) => R.prop(id, data)

export const getResources = (state: any) => {
	const resources = !!state.resource.data ? R.map((id: number) => getResourceById(state.resource.data, id), state.resourcePage.ids) : []
	return resources
}

export const getTotalCount = (state: any) => R.length(state.cart)

export const getTotalPrice = (state: any) => {
	const totalPrice = R.compose(
		R.sum,
		R.pluck('priceValue'),
		R.map((id:number) => getResourceById(state.resource.data, id))
	)(state.cart)
	return totalPrice.toFixed(2)
}

export const getCartItems = (state: any) => {
	// const itemCount = (id: number) => R.compose(
	// 	R.filter((cartItem:any) => R.equals(id, cartItem.id))
	// )(state.cart)
	// const itemWithCount = (item: any) => R.assoc('count', itemCount(item.id).length, item)
	// const uniqueIds: number[] = R.uniq(state.cart)
	const items = R.map((cartItem: any) => getResourceById(state.resource.data, cartItem.id))(state.cart)
	return items
}
