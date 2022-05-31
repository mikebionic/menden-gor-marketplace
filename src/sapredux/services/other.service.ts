import { serviceConfig } from 'configs'
import {
	authBearerHeaderAsync,
	fetchWithCred,
	handleResponse,
	set_local_data_by_key,
	transformFetch,
} from 'sapredux/helpers'

import {
	payment_types,
	payment_methods,
} from 'sapredux/services/mock_data/payment.mock'
import { company_info } from 'sapredux/services/mock_data/other.mock'
import {
	transformPaymentMethod,
	transformPaymentType,
	transformCompanyInfo,
} from './transform_data'

const setCurrency = async (currency = 'TMT') => {
	await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.setCurrency}${currency}/`,
	).then(handleResponse)
	set_local_data_by_key('currency', currency, false, false)
	window.location.reload()
}

const setLanguage = async (language = 'tk') => {
	await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.setLanguage}${language}/`,
	).then(handleResponse)
	set_local_data_by_key('language', language, false, false)
	window.location.reload()
}

const fetch_payment_types = async () => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(payment_types)
			}, 3000)
		})
	}

	return await transformFetch(
		async () =>
			fetchWithCred(
				`${serviceConfig.apiUrl}${serviceConfig.routes.payment_types}`,
			).then(handleResponse),
		transformPaymentType,
	)
}

const fetch_payment_methods = async () => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(payment_methods)
			}, 3000)
		})
	}

	return await transformFetch(
		async () =>
			fetchWithCred(
				`${serviceConfig.apiUrl}${serviceConfig.routes.payment_methods}`,
			).then(handleResponse),
		transformPaymentMethod,
	)
}

const generate_reg_no = async (typeId: number = 9, random: number = 1) => {
	let payload = {
		RegNumTypeId: typeId,
		random_mode: random,
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
		`${serviceConfig.apiUrl}${serviceConfig.routes.gen_reg_no}`,
		requestOptions,
	).then(handleResponse)

	//res = {
	//	"status": 1,
	//	"data": "ANSSFK09381",
	//	"message": "Pred Reg_no generation"
	//}
}

const fetch_company_info = async () => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(company_info)
			}, 3000)
		})
	}

	return await transformFetch(
		async () =>
			fetchWithCred(
				`${serviceConfig.apiUrl}${serviceConfig.routes.company_info}`,
			).then(handleResponse),
		transformCompanyInfo,
		false,
	)
}

const request_view_counter = async (
	credentials: any,
	type: string = 'resource',
) => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					status: true,
					message: 'OK',
					errors: null,
					data: {},
				})
			}, 3000)
		})
	}
	const requestOptions = { headers: credentials }
	return setTimeout(() => {
		fetch(
			`${serviceConfig.goapiUrl}${serviceConfig.routes.view_counter}?type=${type}`,
			requestOptions,
		).then(handleResponse)
	}, serviceConfig.viewCounterTimeout)
}

export const otherService = {
	setCurrency,
	setLanguage,
	fetch_payment_types,
	fetch_payment_methods,
	generate_reg_no,
	fetch_company_info,
	request_view_counter,
}
