import * as R from 'ramda'

import { serviceConfig } from 'configs'
import {
	authBearerHeaderAsync,
	handleResponse,
	transformFetch,
	fetchWithCred,
} from 'sapredux/helpers'
import { paginated_resources } from './mock_data/resource.mock'
import { transformResources as transformResponse } from './transform_data'

const fetchAll = async (query_string = '') => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(paginated_resources)
			}, 200)
		})
	}
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}${query_string}`,
	).then(handleResponse)
}

const fetchById = async (id: number) => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			const resource = R.find(R.propEq('ResId', id), paginated_resources.data)
			resolve(resource)
		})
	}
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.all_resources}${id}/?showRelated=1&showRatings=1`,
	).then(handleResponse)
}

const fetchFeatured_data = async () => {
	return await transformFetch(
		() =>
			fetchWithCred(
				`${serviceConfig.apiUrl}${serviceConfig.routes.featured_resources}`,
			).then(handleResponse),
		transformResponse,
	)
}
const fetchDiscount_data = async () => {
	return await transformFetch(
		() =>
			fetchWithCred(
				`${serviceConfig.apiUrl}${serviceConfig.routes.discount_resources}`,
			).then(handleResponse),
		transformResponse,
	)
}

const fetchAll_data = async () => {
	return await transformFetch(fetchAll, transformResponse)
}

const fetchById_data = async (id: number) => {
	return await transformFetch(() => fetchById(id), transformResponse, false)
}

const loadMore = async ({ next_url }: any) => {
	return await fetchWithCred(`${serviceConfig.apiHost}${next_url}`).then(
		handleResponse,
	)
}

const sendReview = async (payload: any, method = 'POST') => {
	const requestOptions = {
		method: method,
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			...(await authBearerHeaderAsync()),
		},
	}
	return fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.v_ratings}`,
		requestOptions,
	).then(handleResponse)
	// .then((response:any) => ({
	// 	status: response.status,
	// 	message: response.message,
	// 	...transformResponse(response.data),
	// }))
}

const fetchLatest_data = async () => {
	return await transformFetch(
		() =>
			fetchWithCred(
				`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}?per_page=12&sort=date_new`,
			).then(handleResponse),
		transformResponse,
	)
}

export const resourceService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
	fetchFeatured_data,
	fetchDiscount_data,
	fetchLatest_data,
	loadMore,
	sendReview,
}
