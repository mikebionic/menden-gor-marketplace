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
		name: 'About'
	},
	contact: {
		route: `${route_prefix}/contact/`,
		name: 'Contact'
	},
	vGrid: {
		route: `${ route_prefix }/v-grid/`,
		name: 'v-grid'
	},
}