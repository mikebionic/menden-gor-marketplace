import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { handleResponse } from 'sapredux/helpers';
import { paginated_resources } from './mock_data/resource.mock';
import { transformResources as transformResponse } from './transform_data';
import { transformFetch, fetchWithCred } from 'sapredux/helpers';

const fetchAll = async (query_string="") => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(paginated_resources)
			}, 200);
		});
	}
	return await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}${query_string}`).then(handleResponse);
}

const fetchById = async (id:number) => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			const resource = R.find(R.propEq('ResId', id), paginated_resources.data)
			resolve(resource)
		});
	}
	return await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.all_resources}${id}/?showRelated=1&showRatings=1`).then(handleResponse);
}

const fetchFeatured_data = async () => {
	return await transformFetch(
		() => fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.featured_resources}`).then(handleResponse),
		transformResponse
	)
}
const fetchDiscount_data = async () => {
	return await transformFetch(
		() => fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.discount_resources}`).then(handleResponse),
		transformResponse
	)
}

const fetchAll_data = async() => {
	return await transformFetch(fetchAll, transformResponse)
}

const fetchById_data = async(id:number) => {
	return await transformFetch((() => fetchById(id)), transformResponse, false)
}

const loadMore = async({next_url}:any) => {
	return await fetchWithCred(`${serviceConfig.apiHost}${next_url}`).then(handleResponse);
}

export const resourceService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
	fetchFeatured_data,
	fetchDiscount_data,
	loadMore,
};