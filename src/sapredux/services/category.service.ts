import { serviceConfig } from 'configs'
import { handleResponse } from 'sapredux/helpers'
import { all_categories } from './mock_data/category.mock'
import { transformCategories as transformResponse } from 'sapredux/services/transform_data'
import { transformFetch, fetchWithCred } from 'sapredux/helpers'

const fetchAll = async () => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_categories)
			}, 3000)
		})
	}

	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.all_categories}`,
	).then(handleResponse)
}
const fetchAll_data = async () => {
	return await transformFetch(fetchAll, transformResponse)
}

export const categoryService = {
	fetchAll,
	fetchAll_data,
}
