
const _apiPrefix:string = process.env.REACT_APP_API_PREFIX ?? '/api'
const _apiHostUrl:string = process.env.REACT_APP_API_HOST_URL ?? 'http://127.0.0.1:5000'

export const serviceConfig = {
	apiUrl: `${_apiHostUrl}${_apiPrefix}`,
	useMockApi: process.env.REACT_APP_USE_MOCK_API ? parseInt(process.env.REACT_APP_USE_MOCK_API) : 1,
	routes: {
		all_categories: process.env.REACT_APP_API_ALL_CATEGORIES_ROUTE ?? '/tbl-dk-categories/',
		paginated_resources: process.env.REACT_APP_API_PAGINATED_RESOURCES_ROUTE ?? '/resources/',
	},
}