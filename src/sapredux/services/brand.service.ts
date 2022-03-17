import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { handleResponse } from 'sapredux/helpers';
import { all_brands } from './mock_data/brand.mock';
import { transformBrands as transformResponse } from './transform_data';
import { fetch_with_data } from '../helpers/fetch_with_data';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_brands)
			}, 200);
		});
	}

	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_brands}`).then(handleResponse);
}

const fetchById = async (id:number) => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			const data = R.find(R.propEq('BrandId', id), all_brands.data)
			resolve(data)
		});
	}

	const requestOptions = {
		method: 'GET',
		// headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_brands}${id}/`, requestOptions).then(handleResponse);
}

const fetchAll_data = async() => {
	return await fetch_with_data(fetchAll, transformResponse)
}

const fetchById_data = async(id:number) => {
	return await fetch_with_data((() => fetchById(id)), transformResponse, false)
}


export const brandService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
};