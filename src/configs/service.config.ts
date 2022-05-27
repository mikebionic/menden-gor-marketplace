const _apiPrefix: string = process.env.REACT_APP_API_PREFIX ?? '/sap/api'
const _apiHostUrl: string =
	process.env.REACT_APP_API_HOST_URL ?? 'http://127.0.0.1:5000'

const _prefix: string = process.env.REACT_APP_API_PREFIX ?? '/sap'
const _goapiHostUrl: string =
	process.env.REACT_APP_GOAPI_HOST_URL ?? 'http://127.0.0.1:8080'

export const serviceConfig = {
	apiHost: _apiHostUrl,
	goapiHost: _goapiHostUrl,
	apiUrl: `${_apiHostUrl}${_apiPrefix}`,
	goapiUrl: `${_goapiHostUrl}${_prefix}`,
	useMockApi: process.env.REACT_APP_USE_MOCK_API
		? parseInt(process.env.REACT_APP_USE_MOCK_API)
		: 1,
	onlinePaymentMethods: process.env.REACT_APP_ONLINE_PAYMENT_METHODS
		? parseInt(process.env.REACT_APP_ONLINE_PAYMENT_METHODS)
		: 0,

	viewCounterTimeout: process.env.REACT_APP_VIEW_COUNTER_TIMEOUT
		? parseInt(process.env.REACT_APP_VIEW_COUNTER_TIMEOUT)
		: 8000,
	routes: {
		all_categories:
			process.env.REACT_APP_API_ALL_CATEGORIES_ROUTE ?? '/v-categories/',
		all_sliders:
			process.env.REACT_APP_API_ALL_SLIDERS_ROUTE ?? '/tbl-dk-sliders/',
		paginated_resources:
			process.env.REACT_APP_API_PAGINATED_RESOURCES_ROUTE ?? '/resources/',
		all_resources:
			process.env.REACT_APP_API_ALL_RESOURCES_ROUTE ?? '/v-resources/',
		all_brands: process.env.REACT_APP_API_ALL_BRANDS_ROUTE ?? '/tbl-dk-brands/',
		discount_resources:
			process.env.REACT_APP_API_DISCOUNT_RESOURCES_ROUTE ??
			'/v1/discount-resources/?limit=10',
		featured_resources:
			process.env.REACT_APP_API_FEATURED_RESOURCES_ROUTE ??
			'/v-resources/?showMain=1&limit=10',
		checkout_order:
			process.env.REACT_APP_API_CHECKOUT_ORDER_ROUTE ??
			'/v1/checkout-sale-order-inv/',
		all_orders:
			process.env.REACT_APP_API_ALL_ORDERS_ROUTE ?? '/v-order-invoices/',
		google_auth: process.env.REACT_APP_API_GOOGLE_AUTH ?? '/google-auth/',
		login: process.env.REACT_APP_API_LOGIN_ROUTE ?? '/login/',
		register: process.env.REACT_APP_API_REGISTER_ROUTE ?? '/register/',
		register_request:
			process.env.REACT_APP_API_REGISTER_REQUEST_ROUTE ?? '/register-request/',
		verify_register:
			process.env.REACT_APP_API_VERIFY_REGISTER_ROUTE ?? '/verify-register/',
		profile_edit:
			process.env.REACT_APP_API_PROFILE_EDIT_ROUTE ??
			'/v1/v-rp-accs/profile-edit/',
		wishlist: process.env.REACT_APP_API_WISHLIST_ROUTE ?? '/v1/v-wishlist/',
		setCurrency:
			process.env.REACT_APP_API_SET_CURRENCY_ROUTE ??
			'/v1/set-session-currency/',
		setLanguage:
			process.env.REACT_APP_API_SET_LANGUAGE_ROUTE ??
			'/v1/set-session-language/',
		payment_methods:
			process.env.REACT_APP_API_PAYMENT_METHODS ?? '/tbl-dk-payment-methods/',
		payment_types:
			process.env.REACT_APP_API_PAYMENT_TYPES ?? '/tbl-dk-payment-types/',
		v_ratings: process.env.REACT_APP_API_V_RATINGS ?? '/v1/v-ratings/',
		gen_reg_no: process.env.REACT_APP_API_GEN_REG_NO ?? '/v1/gen-reg-no/',
		payment_register_request:
			process.env.REACT_APP_API_PAYMENT_REGISTER_REQUEST ??
			'/v1/order-payment-register-request/',
		order_inv_validation:
			process.env.REACT_APP_API_ORDER_INV_VALIDATION ??
			'/v1/order-inv-validation/',
		company_info:
			process.env.REACT_APP_API_COMPANY_INFO_ROUTE ?? '/company-info/',
		view_counter:
			process.env.REACT_APP_API_VIEW_COUNTER_ROUTE ?? '/goapi/view-counter/',
	},
}

export const namesConfig = {
	main_page_slider_name:
		process.env.REACT_APP_MAIN_PAGE_SLIDER_NAME ?? 'commerce_header',
	company_name: process.env.REACT_APP_COMPANY_NAME ?? 'Marketplace',
	company_email: process.env.REACT_APP_COMPANY_EMAIL ?? 'sapcozgut@gmail.com',
	company_webAddress:
		process.env.REACT_APP_COMPANY_WEBADDRESS ?? 'www.saphasap.com',
	creator_webAddress:
		process.env.REACT_APP_CREATOR_WEBADDRESS ?? 'www.saphasap.com',
	company_phone: process.env.REACT_APP_COMPANY_PHONE ?? '+99364045600',
}
