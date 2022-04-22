import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { routeConstants } from 'navigation'
import CategoryTabContent from 'mobile/components/CategoryTabContent'

const styles = {
	isActiveClass:
		'text-firstColorGradientFromDark dark:text-darkFirstColor cursor-pointer border-b-2 border-firstColorGradientFromDark dark:border-darkFirstColor hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor pb-2',
	defaultClass:
		'cursor-pointer text-black hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor',
}

export const ProfileTab: React.FC = () => {
	return (
		<>
			<div className="grid grid-flow-col gap-4 py-2 cursor-pointer place-content-center auto-cols-max">
				<NavLink
					to={routeConstants.profile.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p>Categories</p>
				</NavLink>
				<NavLink
					to={routeConstants.orders.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p>Brands</p>
				</NavLink>
			</div>
			<div>
				<CategoryTabContent />
			</div>
		</>
	)
}
