import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

// import ProfilePage from 'pages/ProfilePage'

import { routeConstants } from 'navigation/routeConstants'

export const UserRoutes = () => {
	return (
		<Switch >
			{/* <Route path={routeConstants.profile.route} exact
				render={() => <ProfilePage />} /> */}

			<Redirect to={routeConstants.root.route} />
		</Switch>
	)
}