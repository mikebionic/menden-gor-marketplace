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
	}
}