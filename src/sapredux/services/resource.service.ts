import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { handleResponse } from 'sapredux/helpers';
import { paginated_resources } from './mock_data/resource.mock';
import { transformResources as transformResponse } from './transform_data';
import { fetch_with_data } from 'sapredux/helpers/fetch_with_data';

const fetchAll = async (query_string="") => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(paginated_resources)
			}, 200);
		});
	}
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}${query_string}`,{credentials:'include'}).then(handleResponse);
}

const fetchById = async (id:number) => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			const resource = R.find(R.propEq('ResId', id), paginated_resources.data)
			resolve(resource)
		});
	}
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_resources}${id}/?showRelated=1`,{credentials:'include'}).then(handleResponse);
}

const fetchFeatured_data = async () => {
	return await fetch_with_data(
		() => fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.featured_resources}`,{credentials:'include'}).then(handleResponse),
		transformResponse
	)
}
const fetchDiscount_data = async () => {
	return await fetch_with_data(
		() => fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.discount_resources}`,{credentials:'include'}).then(handleResponse),
		transformResponse
	)
}

const fetchAll_data = async() => {
	return await fetch_with_data(fetchAll, transformResponse)
}

const fetchById_data = async(id:number) => {
	return await fetch_with_data((() => fetchById(id)), transformResponse, false)
}

const loadMore = async({next_url}:any) => {
	return await fetch(`${serviceConfig.apiHost}${next_url}`,{credentials:'include'}).then(handleResponse);
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