/* eslint-disable jsx-a11y/anchor-is-valid */
// import {
//   ShoppingBagIcon,
// } from '@heroicons/react/outline';

import { RiShoppingBasketLine } from 'react-icons/ri'
import { IconLabelButton } from 'common/IconLabelButton'
import { connect } from 'react-redux'
import { getTotalCount } from 'sapredux/selectors'
import { ErrorBoundary } from 'modules/errors'
import { getCurrentCurrency } from 'sapredux/helpers'

const CartButton = (props: any) => {
	const { cartOpen, setCartOpen, totalCount, totalPrice } = props
	return (
		<ErrorBoundary>
			<div className="grid grid-flow-col auto-cols-max">
				<a
					className="flex flex-row-reverse mr-1"
					onClick={() => setCartOpen(!cartOpen)}
				>
					<IconLabelButton
						className="items-center h-6 grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid dark:text-darkTextWhiteColor dark:border-darkFirstColor "
						icon={
							<RiShoppingBasketLine className="w-6 h-6 mx-3 text-2xl text-white dark:text-darkTextWhiteColor" />
						}
					/>
					<span className="absolute text-sm font-semibold text-white dark:text-darkTextWhiteColor">
						{totalCount}
					</span>
				</a>
				<div className="mt-3 text-sm font-semibold text-white dark:text-darkTextWhiteColor">
					{totalPrice} {getCurrentCurrency().symbol}
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => {
	const totalData = getTotalCount(state)
	return {
		totalCount: totalData.totalCount,
		totalPrice: totalData.totalPrice,
	}
}

export default connect(mapStateToProps)(CartButton)
