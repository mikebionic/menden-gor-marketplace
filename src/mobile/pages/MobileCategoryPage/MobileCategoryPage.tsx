import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { routeConstants } from 'navigation'
import CategoryTabContent from 'mobile/components/CategoryTabContent'
import { ErrorBoundary } from 'modules/errors'
import { useTranslation } from 'react-i18next'

const styles = {
	isActiveClass:
		'text-firstColorGradientFromDark font-semibold dark:text-darkFirstColor cursor-pointer border-b-2 border-firstColorGradientFromDark dark:border-darkFirstColor hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor pb-2',
	defaultClass:
		'cursor-pointer text-[#C4C4C4] hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor',
}

export const MobileCategoryPage: React.FC = () => {
	const { t } = useTranslation()
	return (
		<ErrorBoundary>
			<div className="grid grid-flow-col gap-4 cursor-pointer place-content-center auto-cols-fr">
				<NavLink
					to={routeConstants.categories.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p className="text-center font-oxygen">{t('common.categories')}</p>
				</NavLink>
				<NavLink
					to={routeConstants.brands.route}
					className={({ isActive }) =>
						isActive ? styles.isActiveClass : styles.defaultClass
					}
				>
					<p className="text-center font-oxygen">{t('common.brands')}</p>
				</NavLink>
			</div>
			<div>
				<CategoryTabContent />
			</div>
		</ErrorBoundary>
	)
}
