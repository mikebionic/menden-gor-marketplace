import { useLocation } from 'react-router-dom'

import MobileCart from 'mobile/components/MobileCart'
import MobileCheckout from 'mobile/components/MobileCheckout'

import { routeConstants } from 'navigation'

const CheckoutTabContent = () => {
	const page_location = useLocation()

	switch (page_location.pathname) {
		case routeConstants.cart.route:
			return <MobileCart />

		case routeConstants.checkout.route:
			return <MobileCheckout />

		default:
			return <MobileCheckout />
	}
}

export default CheckoutTabContent
