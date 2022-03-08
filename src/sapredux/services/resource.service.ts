import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { handleResponse, authBearerHeader } from 'sapredux/helpers';
import { paginated_resources } from './mock_data/resource.mock';
import { transformResources as transformResponse } from './transform_data';
import { fetch_with_data } from '../helpers/fetch_with_data';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(paginated_resources)
			}, 200);
		});
	}

	const requestOptions = {
		method: 'GET',
		// headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}`, requestOptions).then(handleResponse);

}

const fetchById = async (id:number) => {
	console.log("requested", id)
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			const resource = R.find(R.propEq('ResId', id), paginated_resources.data)
			resolve(resource)
		});
	}

	const requestOptions = {
		method: 'GET',
		// headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_resources}${id}/?showRelated=1`, requestOptions).then(handleResponse);

}

const fetchAll_data = async() => {
	return await fetch_with_data(fetchAll, transformResponse)
}

const fetchById_data = async(id:number) => {
	return await fetch_with_data((() => fetchById(id)), transformResponse, false)
}



export const resourceService = {
	fetchAll,
	fetchById,
	fetchAll_data,
	fetchById_data,
};