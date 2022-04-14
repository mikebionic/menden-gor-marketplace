import { serviceConfig } from 'configs'
import { handleResponse } from 'sapredux/helpers'
import { all_categories } from './mock_data/category.mock'
import { fetchWithCred } from 'sapredux/helpers'

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

export const categoryService = {
	fetchAll,
}
