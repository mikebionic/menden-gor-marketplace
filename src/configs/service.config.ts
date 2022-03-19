
const _apiPrefix:string = process.env.REACT_APP_API_PREFIX ?? '/api'
const _apiHostUrl:string = process.env.REACT_APP_API_HOST_URL ?? 'http://127.0.0.1:5000'

export const serviceConfig = {
	apiHost: _apiHostUrl,
	apiUrl: `${_apiHostUrl}${_apiPrefix}`,
	useMockApi: process.env.REACT_APP_USE_MOCK_API ? parseInt(process.env.REACT_APP_USE_MOCK_API) : 1,
	routes: {
		all_categories: process.env.REACT_APP_API_ALL_CATEGORIES_ROUTE ?? '/tbl-dk-categories/',
		all_sliders: process.env.REACT_APP_API_ALL_SLIDERS_ROUTE ?? '/tbl-dk-sliders/',
		paginated_resources: process.env.REACT_APP_API_PAGINATED_RESOURCES_ROUTE ?? '/resources/',
		all_resources: process.env.REACT_APP_API_ALL_RESOURCES_ROUTE ?? '/v-resources/',
		all_brands: process.env.REACT_APP_API_ALL_BRANDS_ROUTE ?? '/tbl-dk-brands/',
		discount_resources: process.env.REACT_APP_API_DISCOUNT_RESOURCES_ROUTE ?? '/v1/discount-resources/?limit=10',
		featured_resources: process.env.REACT_APP_API_FEATURED_RESOURCES_ROUTE ?? '/v-resources/?showMain=1&limit=10',
		checkout_order: process.env.REACT_APP_API_CHECKOUT_ORDER_ROUTE ?? '/v1/checkout-sale-order-inv/',
		all_orders: process.env.REACT_APP_API_ALL_ORDERS_ROUTE ?? '/v-order-invoices/',
		all_wishlist: process.env.REACT_APP_API_ALL_WISHLIST_ROUTE ?? '/v-wishlist/',
		login: process.env.REACT_APP_API_LOGIN_ROUTE ?? '/login/',
		register: process.env.REACT_APP_API_REGISTER_ROUTE ?? '/register/',
		profile_edit: process.env.REACT_APP_API_PROFILE_EDIT_ROUTE ?? '/profile-edit/',
		add_to_wishlist: process.env.REACT_APP_API_ADD_TO_WISHLIST_ROUTE ?? '/add-to-wishlist/',
	},
}

export const namesConfig = {
	main_page_slider_name: process.env.REACT_APP_MAIN_PAGE_SLIDER_NAME ?? "commerce_header"
}