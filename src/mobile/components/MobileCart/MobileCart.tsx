import React, { useEffect } from 'react'

import { ErrorBoundary } from 'modules/errors'
import { getCartItems, getTotalCount } from 'sapredux/selectors'
import {
	resourceAddedToCart,
	resourceAllRemovedFromCart,
	resourceRemovedFromCart,
} from 'sapredux/actions'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { MobileCartRow } from 'mobile/components/MobileCart'
import { routeConstants } from 'navigation'
import { getCurrentCurrency } from 'sapredux/helpers'

interface IMobileCartProps {
	open?: any
	setOpen?: any
	items?: any
	totalCount?: any
	totalPrice?: any
	onIncrease?: any
	onDecrease?: any
	onDelete?: any
}

const MobileCart: React.FC<IMobileCartProps> = ({
	items,
	totalCount,
	totalPrice,
	onIncrease,
	onDecrease,
	onDelete,
}) => {
	const { t } = useTranslation()
	const location = useLocation()

	return (
		<ErrorBoundary>
			<div className="">
				<div className="mt-8">
					<div className="flow-root">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							{items.map((item: any, idx: number) => (
								<li key={idx}>
									<MobileCartRow
										key={idx}
										item={item}
										onIncrease={onIncrease}
										onDecrease={onDecrease}
										onDelete={onDelete}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="px-4 py-6 border-t border-gray-200 sm:px-6">
					<div className="mt-6">
						<Link
							to={routeConstants.checkout.route}
							className="grid items-center justify-between grid-flow-col px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm auto-cols-max dark:text-darkTextWhiteColor bg-firstColorGradientFromDark hover:bg-socialBarItemHover dark:bg-darkFirstColor dark:hover:bg-darkFirstColor dark:hover:opacity-80 hover:text-white"
						>
							{t('common.checkout')}
							<p className="">
								{totalPrice} {getCurrentCurrency().symbol}
							</p>
						</Link>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => {
	const totalData = getTotalCount(state)
	return {
		items: getCartItems(state),
		totalCount: totalData.totalCount,
		totalPrice: totalData.totalPrice,
	}
}

const mapDispatchToProps = {
	onIncrease: resourceAddedToCart,
	onDecrease: resourceRemovedFromCart,
	onDelete: resourceAllRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileCart)
