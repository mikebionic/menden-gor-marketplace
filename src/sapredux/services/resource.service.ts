import * as R from 'ramda'

import { serviceConfig } from 'configs';
import { handleResponse, authBearerHeader } from 'sapredux/helpers';
import { paginated_resources } from './mock_data/resource.mock';
import { transformResources } from './transform_data';

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
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}`, requestOptions).then(handleResponse);

}

export const resourceService = {
	fetchAll,
	fetchById
};