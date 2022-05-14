import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { TabContent } from 'pages/ProfileTab/TabContent'
import { routeConstants } from 'navigation'

const styles = {
	isActiveClass:
		'text-firstColorGradientFromDark dark:text-darkFirstColor cursor-pointer border-b-2 border-firstColorGradientFromDark dark:border-darkFirstColor hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor pb-2',
	defaultClass:
		'cursor-pointer text-black hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor',
}

export const ProfileTab: React.FC = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className="grid grid-flow-col gap-4 py-2 cursor-pointer place-content-center auto-cols-max min-phone:text-[12px]">
				<NavLink
					to={routeConstants.profile.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p>{t('common.profile')}</p>
				</NavLink>
				<NavLink
					to={routeConstants.orders.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p>{t('common.orders')}</p>
				</NavLink>
				<NavLink
					to={routeConstants.wishlist.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p>{t('common.wishlist')}</p>
				</NavLink>
				<NavLink
					to={routeConstants.profileEdit.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p>{t('common.profile_edit')}</p>
				</NavLink>
			</div>
			<div>
				<TabContent />
			</div>
		</>
	)
}
