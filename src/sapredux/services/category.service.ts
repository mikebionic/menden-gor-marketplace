import { serviceConfig } from 'configs';
import { handleResponse } from 'sapredux/helpers';
import { all_categories } from './mock_data/category.mock';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_categories)
			}, 3000);
		});
	}

	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_categories}`).then(handleResponse);

}

export const categoryService = {
	fetchAll
};