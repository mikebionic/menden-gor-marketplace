import React from 'react'
import { NavLink } from 'react-router-dom'

import { routeConstants } from 'navigation'
import CheckoutTabContent from 'mobile/components/CheckoutTabContent'

const styles = {
	isActiveClass:
		'text-firstColorGradientFromDark font-semibold dark:text-darkFirstColor cursor-pointer border-b-2 border-firstColorGradientFromDark dark:border-darkFirstColor hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor pb-2',
	defaultClass:
		'cursor-pointer text-[#C4C4C4] hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor',
}

export const MobileCheckoutPage: React.FC = () => {
	return (
		<>
			<div className="grid grid-flow-col gap-4 cursor-pointer place-content-center auto-cols-fr">
				<NavLink
					to={routeConstants.cart.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p className="text-center font-oxygen">Cart</p>
				</NavLink>
				<NavLink
					to={routeConstants.checkout.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p className="text-center font-oxygen">Checkout</p>
				</NavLink>
			</div>
			<div>
				<CheckoutTabContent />
			</div>
		</>
	)
}
