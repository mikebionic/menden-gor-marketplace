import { Navigate, Route, Routes } from 'react-router-dom'

import { routeConstants } from 'navigation'
import { ProfileTab } from 'pages/ProfileTab'
import MobileWishlistPage from 'mobile/pages/MobileWishlistPage'
import { WishlistPage } from 'pages/WishlistPage'

const mobile = window.innerWidth < 768 ? true : false

export const UserRoutes = () => {
	return (
		<Routes>
			<Route path={routeConstants.profile.route} element={<ProfileTab />} />
			<Route path={routeConstants.profileEdit.route}>
				<Route path=":type" element={<ProfileTab />} />
				<Route path="" element={<ProfileTab />} />
			</Route>
			<Route path={routeConstants.orders.route} element={<ProfileTab />} />
			<Route
				path={routeConstants.wishlist.route}
				element={mobile ? <WishlistPage /> : <ProfileTab />}
			/>

			<Route path="*" element={<Navigate to={routeConstants.root.route} />} />
		</Routes>
	)
}
