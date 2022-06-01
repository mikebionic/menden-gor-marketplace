import { serviceConfig } from 'configs'
import { handleResponse, transformFetch, fetchWithCred } from 'sapredux/helpers'
import { resource_collections } from './mock_data/resource.mock'
import { transformResourceCollections as transformResponse } from './transform_data'

const fetchAll = async (query_string = '') => {
	if (serviceConfig.useMockApi) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(resource_collections)
			}, 200)
		})
	}
	return await fetchWithCred(
		`${serviceConfig.apiUrl}${serviceConfig.routes.resource_collections}${query_string}`,
	).then(handleResponse)
}

const fetchAll_data = async (query_string: string) => {
	return await transformFetch(() => fetchAll(query_string), transformResponse)
}

export const resourceCollectionService = {
	fetchAll,
	fetchAll_data,
}
