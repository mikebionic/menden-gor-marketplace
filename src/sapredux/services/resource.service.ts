import { serviceConfig } from 'configs';
import { handleResponse, authBearerHeader } from 'sapredux/helpers';
import { paginated_resources } from './mock_data/resource.mock';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			resolve(paginated_resources)
		});
	}

	const requestOptions = {
		method: 'GET',
		headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.paginated_resources}`, requestOptions).then(handleResponse);

}

export const resourceService = {
	fetchAll
};