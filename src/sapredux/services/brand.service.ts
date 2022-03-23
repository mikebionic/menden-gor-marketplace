import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { handleResponse } from 'sapredux/helpers';
import { all_brands } from './mock_data/brand.mock';
import { transformBrands as transformResponse } from './transform_data';
import { transformFetch, fetchWithCred } from 'sapredux/helpers';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_brands)
			}, 200);
		});
	}

	return await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.all_brands}`).then(handleResponse);
}

const fetchById = async (id:number) => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			const data = R.find(R.propEq('BrandId', id), all_brands.data)
			resolve(data)
		});
	}

	return await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.all_brands}${id}/`).then(handleResponse);
}

const fetchAll_data = async() => {
	return await transformFetch(fetchAll, transformResponse)
}

const fetchById_data = async(id:number) => {
	return await transformFetch((() => fetchById(id)), transformResponse, false)
}


export const brandService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
};