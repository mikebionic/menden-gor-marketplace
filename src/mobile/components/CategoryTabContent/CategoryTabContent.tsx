import { useLocation } from 'react-router-dom'

import { Brands } from 'mobile/components/Brands'
import { Categories } from 'mobile/components/Categories'

import { routeConstants } from 'navigation'

const CategoryTabContent = () => {
	const page_location = useLocation()

	switch (page_location.pathname) {
		case routeConstants.profile.route:
			return <Categories />

		case routeConstants.wishlist.route:
			return <Brands />

		default:
			return <Categories />
	}
}

export default CategoryTabContent
