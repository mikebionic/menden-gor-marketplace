import { useLocation } from 'react-router-dom'

import Brands from 'mobile/components/Brands'
//!!!TODO: this is not a component.. it will work with redux and should be separated
import Categories from 'mobile/components/Categories'

import { routeConstants } from 'navigation'

const CategoryTabContent = () => {
	const page_location = useLocation()

	switch (page_location.pathname) {
		case routeConstants.categories.route:
			return <Categories />

		case routeConstants.brands.route:
			return <Brands />

		default:
			return <Categories />
	}
}

export default CategoryTabContent
