import { useLocation } from 'react-router-dom'

import { routeConstants } from 'navigation'
import MobileCart from 'mobile/components/MobileCart'
import CheckoutForm from 'components/CheckoutForm'

const CheckoutTabContent = () => {
	const page_location = useLocation()

	switch (page_location.pathname) {
		case routeConstants.cart.route:
			return <MobileCart />

		case routeConstants.checkout.route:
			return <CheckoutForm />

		default:
			return <MobileCart />
	}
}

export default CheckoutTabContent
