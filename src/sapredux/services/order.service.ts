import * as R from 'ramda'

import { serviceConfig } from 'configs'
import { authBearerHeaderAsync, handleResponse } from 'sapredux/helpers'
import { all_orders } from './mock_data/orders.mock'
import { transformOrderInv as transformResponse } from './transform_data'
import { transformFetch, fetchWithCred } from 'sapredux/helpers'

const fetchAll = async () => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_orders)
			}, 200)
		})
	}

	const requestOptions = { headers: await authBearerHeaderAsync() }
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.all_orders}?limit=15`,
		requestOptions,
	).then(handleResponse)
}

const fetchById = async (guid: string) => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			const data = R.find(R.propEq('OInvGuid', guid), all_orders.data)
			resolve(data)
		})
	}

	const requestOptions = { headers: await authBearerHeaderAsync() }
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.all_orders}${guid}/`,
		requestOptions,
	).then(handleResponse)
}

const fetchAll_data = async () => {
	return await transformFetch(fetchAll, transformResponse)
}

const fetchById_data = async (guid: string) => {
	return await transformFetch(() => fetchById(guid), transformResponse, false)
}

const checkoutSaleOrderInv = async (payload: any) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			...(await authBearerHeaderAsync()),
		},
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.checkout_order}`,
		requestOptions,
	).then(handleResponse)
}

const request_payment_register = async (
	regNo: string,
	totalPrice: any,
	type: string = 'halkbank',
	description?: string,
) => {
	let payload = {
		OInvRegNo: regNo,
		TotalPrice: totalPrice,
		OrderDesc: description,
	}

	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			...(await authBearerHeaderAsync()),
		},
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.payment_register_request}?online_payment_type=${type}`,
		requestOptions,
	).then(handleResponse)

	//{
	//	"data": {
	//		"": "json data of payment registration service",
	//		"checkout_url": "https://....",
	//		"OrderId": "SomeOrderId",
	//		"online_payment_type": "halkbank"
	//	},
	//	"RegNo": "OInvRegNo",
	//	"OInvRegNo": "OInvRegNo",
	//	"TotalPrice": 17.50,
	//	"OrderDesc": "Description text
	//}
}

const validate_order_inv = async (
	orderId: string,
	regNo: string,
	rpAccGuid: string,
) => {
	let payload = {
		OrderId: orderId,
		OInvRegNo: regNo,
		RpAccGuid: rpAccGuid,
	}

	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			...(await authBearerHeaderAsync()),
		},
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.order_inv_validation}`,
		requestOptions,
	).then(handleResponse)
}

export const orderService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
	checkoutSaleOrderInv,
	request_payment_register,
	validate_order_inv,
}
