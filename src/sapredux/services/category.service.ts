import { serviceConfig } from 'configs';
import { handleResponse, authBearerHeader } from 'sapredux/helpers';
import { all_categories } from './mock_data/category.mock';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_categories)
			}, 3000);
		});
	}

	const requestOptions = {
		method: 'GET',
		// headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_categories}`, requestOptions).then(handleResponse);

}

export const categoryService = {
	fetchAll
};