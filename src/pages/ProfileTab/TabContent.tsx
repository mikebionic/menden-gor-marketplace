

import { Profile } from 'pages/Profile';
import { OrderLine, Orders } from 'pages/Orders';
import { Wishlist } from 'pages/Wishlist';
import { ProfileEdit } from 'pages/ProfileEdit';
import { history } from 'sapredux/helpers'
import { routeConstants } from 'navigation/routeConstants';

export const TabContent = () => {
	const page = history.location.pathname

	switch(page){
		case routeConstants.profile.route:
			return <Profile />

		case routeConstants.wishlist.route:
			return <Wishlist />

		case routeConstants.orders.route:
			return <OrderLine />

		case routeConstants.profileEdit.route:
			return <ProfileEdit />

		default:
			return <Profile />
	}
}
