import { route_prefix } from 'configs'

export const routeConstants = {
	root: {
		route: `${route_prefix}/`,
		name: 'Home',
	},
	login: {
		route: `${route_prefix}/login/`,
		name: 'Login',
	},
	register: {
		route: `${ route_prefix }/register/`,
		name: 'Register'
	},
	reset: {
		route: `${ route_prefix }/reset/`,
		name: 'Reset Password'
	},
	logout: {
		route: `${route_prefix}/logout/`,
		name: 'Logout',
	},
	profile: {
		route: `${route_prefix}/profile/`,
		name: 'Profile',
	},
	about: {
		route: `${route_prefix}/about/`,
		name: 'About us'
	},
	contact: {
		route: `${route_prefix}/contact/`,
		name: 'Contact us'
	},
	vGrid: {
		route: `${ route_prefix }/v-grid/`,
		name: 'VGrid'
	},
	product: {
		route: `${ route_prefix }/product/`,
		name: 'Product'
	},
	wishlist: {
		route: `${ route_prefix }/wishlist/`,
		name: 'Wishlist'
	},
	profileEdit: {
		route: `${ route_prefix }/profile-edit/`,
		name: 'Edit profile'
	},
	orders: {
		route: `${ route_prefix }/orders/`,
		name: 'Orders'
	},
	checkout: {
		route: `${ route_prefix }/checkout/`,
		name: 'Checkout'
	},
	categories: {
		route: `${ route_prefix }/categories/`,
		name: 'Categories'
	},
	settings: {
		route: `${ route_prefix }/settings/`,
		name: 'Settings'
	},
	brands: {
		route: `${ route_prefix }/brands/`,
		name: 'Brands'
	},
	cart: {
		route: `${ route_prefix }/cart/`,
		name: 'Cart'
	},
	payment_and_delivery_info: {
		route: `${ route_prefix }/payment_and_delivery_info/`,
		name: 'Payment and delivery info'
	}
}