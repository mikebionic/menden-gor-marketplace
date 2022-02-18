import * as R from 'ramda'

export const getResourceById = (data: any, id: number) => R.prop(id, data)

export const getResources = (state: any) => {
	const resources = !!state.resource.data ? R.map((id: number) => getResourceById(state.resource.data, id), state.resourcesPage.ids) : []
	return resources
}

export const getTotalCount = (state: any, id: number = 0) => {
	var totalPrice: number = 0;
	var totalCount: number = 0;
	state.cart.map((item:any) => {
		if (id > 0){
			if (item.id === id){
				const resource = getResourceById(state.resource.data, item.id)
				totalPrice = resource.priceValue * item.quantity
				totalCount = item.quantity;
			}
		} else {
			const resource = getResourceById(state.resource.data, item.id)
			totalPrice += resource.priceValue * item.quantity
			totalCount = R.length(state.cart)
		}
	})
	return {
		"totalCount":	totalCount,
		"totalPrice": totalPrice.toFixed(2)
	}
}

export const getTotalPrice = (state: any) => {
	const totalPrice = R.compose(
		R.sum,
		R.pluck('priceValue'),
		R.map((id:number) => getResourceById(state.resource.data, id))
	)(state.cart)
	return totalPrice.toFixed(2)
}

export const getCartItems = (state: any) => {
	const items = R.compose(
		R.map((cartItem: any) => cartItem),
		R.map((cartItem: any) => getResourceById(state.resource.data, cartItem.id))
	)(state.cart)

	return items
}
