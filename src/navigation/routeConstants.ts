import { route_prefix } from 'configs'

export const routeConstants = {
	root: {
		route: `${route_prefix}/`,
		name: 'Main',
	},
	login: {
		route: `${route_prefix}/login/`,
		name: 'Login',
	},
	logout: {
		route: `${route_prefix}/logout/`,
		name: 'Logout',
	},
	profile: {
		route: `${route_prefix}/profile/`,
		name: 'Profile',
	},
}