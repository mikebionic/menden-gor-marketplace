import { serviceConfig } from 'configs'
import {
	fetchWithCred,
	handleResponse,
	set_local_data_by_key,
	transformFetch,
} from 'sapredux/helpers'

import {
	payment_types,
	payment_methods,
} from 'sapredux/services/mock_data/payment.mock'
import { transformPaymentMethod, transformPaymentType } from './transform_data'

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

export const otherService = {
	setCurrency,
	setLanguage,
	fetch_payment_types,
	fetch_payment_methods,
}
