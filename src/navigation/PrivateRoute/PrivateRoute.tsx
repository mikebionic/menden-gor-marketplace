import { Navigate } from 'react-router-dom'

import { routeConstants } from 'navigation'

export const PrivateRoute = ({ component: Component, ...rest }: any) =>
	localStorage.getItem('user') ? (
		<Component {...rest} />
	) : (
		<Navigate to={routeConstants.login.route} />
	)
