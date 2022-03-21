import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { authBearerHeader, handleResponse } from 'sapredux/helpers';
import { all_orders } from './mock_data/orders.mock';
import { transformOrderInv as transformResponse } from './transform_data';
import { fetch_with_data } from 'sapredux/helpers';

const fetchAll = async () => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_orders)
			}, 200);
		});
	}

	const requestOptions = {
		method: 'GET',
		headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_orders}?limit=15`, requestOptions).then(handleResponse);
}

const fetchById = async (guid:string) => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			const data = R.find(R.propEq('OInvGuid', guid), all_orders.data)
			resolve(data)
		});
	}

	const requestOptions = {
		method: 'GET',
		headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_orders}${guid}/`, requestOptions).then(handleResponse);
}

const fetchAll_data = async() => {
	return await fetch_with_data(fetchAll, transformResponse)
}

const fetchById_data = async(guid:string) => {
	return await fetch_with_data((() => fetchById(guid)), transformResponse, false)
}


export const orderService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
};