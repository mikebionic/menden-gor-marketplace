import React from 'react'
import { CartBody } from 'components/Cart'
import { ErrorBoundary } from 'modules/errors'
import CheckoutForm from 'components/CheckoutForm'

interface ICheckoutPage {
	items?: any
	totalCount?: any
	totalPrice?: any
	onIncrease?: any
	onDecrease?: any
	onDelete?: any
	user?: any
	loggedIn?: boolean
}

const CheckoutPage: React.FC<ICheckoutPage> = () => {
	return (
		<ErrorBoundary>
			<div className="grid md:grid-flow-row gap-6 auto-rows-max xl:grid-cols-[60%_40%] my-8 2xl:my-28 3xl:my-40">
				<CartBody />
				<CheckoutForm />
			</div>
		</ErrorBoundary>
	)
}

export default CheckoutPage
