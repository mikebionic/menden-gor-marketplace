
import { useLocation } from 'react-router-dom'

import { ProfilePage } from 'pages/ProfilePage';
import { OrderLine, Orders } from 'pages/Orders';
import { Wishlist } from 'pages/Wishlist';
import { ProfileEdit } from 'pages/ProfileEdit';
import { routeConstants } from 'navigation/routeConstants';


export const TabContent = () => {
	const page_location = useLocation()

	switch(page_location.pathname){
		case routeConstants.profile.route:
			return <ProfilePage />

		case routeConstants.wishlist.route:
			return <Wishlist />

		case routeConstants.orders.route:
			return <OrderLine />

		case routeConstants.profileEdit.route:
			return <ProfileEdit />

		default:
			return <ProfilePage />
	}
}
