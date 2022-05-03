import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Input from 'rc-input'
import {
	getCartItems,
	getCurrentUserInfo,
	getTotalCount,
} from 'sapredux/selectors'
import { getCurrentCurrency, sapswal } from 'sapredux/helpers'
import { CartRow } from 'components/Cart'
import {
	PaymentMethods,
	PaymentTypes,
	OnlinePaymentMethods,
} from 'components/Payment'
import { ErrorBoundary } from 'modules/errors'
import {
	resourceAddedToCart,
	resourceAllRemovedFromCart,
	resourceRemovedFromCart,
} from 'sapredux/actions'
import { orderService, otherService } from 'sapredux/services'
import { toJsonCheckoutOrderInv } from 'sapredux/services/transform_data'

interface IMobileCheckout {
	items?: any
	totalCount?: any
	totalPrice?: any
	onIncrease?: any
	onDecrease?: any
	onDelete?: any
	user?: any
	loggedIn?: boolean
}

const MobileCheckout: React.FC<IMobileCheckout> = (props: any) => {
	const {
		items,
		orderInvLines,
		totalPrice,
		onIncrease,
		onDecrease,
		onDelete,
		user,
		loggedIn,
	} = props
	const [loading, set_loading] = useState(false)
	const [inputs, setInputs] = useState({
		name: loggedIn ? `${user.username} - ${user.name}` : '',
		phoneNumber: loggedIn
			? `${user.mobilePhoneNumber || user.homePhoneNumber}`
			: '',
		description: loggedIn ? `Address: ${user.address || ''}` : '',
		ptId: 1,
		pmId: 1,
		typeId: 2,
		orderInvRegNo: '',
		currency_code: getCurrentCurrency().name,
		orderInvLines: orderInvLines,
		online_payment_id: 1,
		online_payment_method: 'halkbank',
		totalPrice: totalPrice,
		orderId: '',
		payment_window_url: '',
	})
	useEffect(() => {
		handleKeyValueChange('orderInvLines', orderInvLines)
		handleKeyValueChange('totalPrice', totalPrice)
	}, [orderInvLines, totalPrice])
	const handleChange = (e: any) => {
		let { name, value } = e.target
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}
	const handleKeyValueChange: any = async (
		name: string = '',
		value: any = '',
	) => {
		await setInputs((inputs) => ({ ...inputs, [name]: value }))
	}

	const handleResponse = (response: any) => {
		console.log(response)
		let text = `${response.message} \n ${
			response.status === 1 && 'You can view your order in profile page'
		}`
		sapswal.fire({
			icon: response.status === 1 ? 'success' : 'error',
			text: text,
		})
		if (response.status === 1) {
			clearCart()
		}
	}
	const clearCart = () => items.map((item: any) => onDelete(item.id))

	const handleSubmit = () => {
		try {
			if (inputs.totalPrice < 0.1) {
				throw 'Cannot checkout an empty cart!'
			}
			if (
				inputs.description.length < 1 ||
				inputs.name.length < 1 ||
				inputs.phoneNumber.length < 1
			) {
				throw 'Fill the required fields!'
			}
			set_loading(true)
			if (inputs.pmId !== 2) {
				inputs.description = `${inputs.description} ${inputs.name} ${inputs.phoneNumber}`
				orderService
					.checkoutSaleOrderInv(toJsonCheckoutOrderInv(inputs), loggedIn)
					.then(
						(response: any) => handleResponse(response),
						(error: any) =>
							errorSwal(`Failed to checkout order: ${error.toString()}`),
					)
					.finally(() => set_loading(false))
			} else {
				handleOnlineCheckout(inputs).finally(() => set_loading(false))
			}
		} catch (e: any) {
			errorSwal(e.toString())
			set_loading(false)
		}
	}

	const handleOnlineCheckout = async (inputs: any) => {
		try {
			//let regNo_response = await otherService.generate_reg_no()
			//if (regNo_response.status !== 1) {
			//	throw 'error'
			//}
			//await handleKeyValueChange('orderInvRegNo', regNo_response.data)
			//await handleKeyValueChange('typeId', 13)
			//await setInputs((inputs) => ({
			//	...inputs,
			//	orderInvRegNo: regNo_response.data,
			//	typeId: 13,
			//}))
			//let payload = {
			//	...inputs,
			//	orderInvRegNo: regNo_response.data,
			//	typeId: 13,
			//}
			otherService
				.generate_reg_no()
				.then((response: any) => handle_Reg_no_gen_response(response))

			//regNo_response.data.length > 1
			//	? orderService
			//			.checkoutSaleOrderInv(toJsonCheckoutOrderInv(payload))
			//			.then(
			//				(response: any) => handle_payment_register(response),
			//				(error: any) => errorSwal(error.toString()),
			//			)
			//	: errorSwal()
		} catch {
			errorSwal()
		}
	}

	const handle_Reg_no_gen_response = async (response: any) => {
		if (response.status !== 1) {
			throw 'error'
		}
		console.log(inputs.orderInvRegNo)
		await handleKeyValueChange('orderInvRegNo', response.data)
		await handleKeyValueChange('typeId', 13)
		console.log(inputs.orderInvRegNo)
		await setInputs((inputs) => ({
			...inputs,
			orderInvRegNo: response.data,
			typeId: 13,
		}))
		console.log('++++++ ', response.data, inputs.orderInvRegNo)
		response.data.length > 1
			? orderService
					.checkoutSaleOrderInv(toJsonCheckoutOrderInv(inputs), loggedIn)
					.then(
						(response: any) => handle_payment_register(response),
						(error: any) => errorSwal(error.toString()),
					)
			: errorSwal()
	}

	const handle_payment_register = (response: any) => {
		if (response.status === 1) {
			orderService
				.request_payment_register(
					inputs.orderInvRegNo,
					inputs.totalPrice,
					inputs.online_payment_method,
					inputs.description,
				)
				.then(
					(response: any) =>
						handleKeyValueChange(
							'payment_window_url',
							response.data.checkout_url,
						)
							.then(handleKeyValueChange('orderId', response.data.OrderId))
							.then(open_payment_window),
					(error: any) => errorSwal(error.toString()),
				)
		} else {
			errorSwal('Payment register failed, contact administrators or try again')
		}
	}

	function open_payment_window(url: string) {
		let window_properties = 'width=600,height=400,resizable=yes,location=no'
		let paymentWin: any = window.open(url, 'Payment', window_properties)
		try {
			paymentWin.addEventListener('unload', function () {
				setTimeout(() => {
					detect_window_close(paymentWin)
				}, 5000)
			})
		} catch {
			errorSwal()
		}
	}
	var payment_validated_times = 0
	function detect_window_close(current_window: any) {
		//$('#cover-spin').show()
		let win_closed_interval = setInterval(() => {
			try {
				if (current_window.closed) {
					clearInterval(win_closed_interval)
					console.log('payment closed')
					setTimeout(() => {
						$('#cover-spin').hide()
						if (payment_validated_times < 1) {
							//validate_oinv_payment()
							payment_validated_times++
						} else {
							clearInterval(win_closed_interval)
						}
					}, 300)
				}
			} catch {
				clearInterval(win_closed_interval)
			}
		}, 500)
	}

	const errorSwal = (text?: string) =>
		sapswal.fire({
			icon: 'error',
			title: 'Error',
			text: text || 'Failed to checkout order: server exchange error.',
		})

	return (
		<ErrorBoundary>
			<div className="grid w-full grid-flow-row gap-4 p-4 mt-4 auto-rows-max shadow-defaultShadow bg-fullwhite dark:bg-darkComponentColor">
				<div className="grid grid-flow-col auto-cols-max place-content-between">
					<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
						Jemi
					</p>
					<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
						{totalPrice} {getCurrentCurrency().symbol}
					</p>
				</div>

				<p className="text-base font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
					Payment type
				</p>
				<PaymentTypes
					id={inputs.ptId}
					onChange={(id: any) => handleKeyValueChange('ptId', id)}
				/>

				<p className="text-base font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
					Payment method
				</p>
				<PaymentMethods
					id={inputs.pmId}
					onChange={(id: any) => handleKeyValueChange('pmId', id)}
				/>

				{inputs.pmId === 2 && (
					<OnlinePaymentMethods
						id={inputs.online_payment_id}
						name={inputs.online_payment_method}
						onChange={({ id, name }: any) => {
							handleKeyValueChange('online_payment_id', id)
							handleKeyValueChange('online_payment_method', name)
						}}
					/>
				)}

				<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
					Name:
				</p>
				<Input
					placeholder="Type your name"
					autoFocus
					type="text"
					name="name"
					value={inputs.name}
					onChange={handleChange}
					inputMode="text"
					className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:bg-darkBgColor hover:border-textColorOrange dark:hover:border-darkFirstColor dark:border-darkBgColor"
				/>
				<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
					Phone number:
				</p>
				<Input
					placeholder="+993"
					type="number"
					name="phoneNumber"
					value={inputs.phoneNumber}
					onChange={handleChange}
					inputMode="text"
					className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:bg-darkBgColor hover:border-textColorOrange dark:hover:border-darkFirstColor dark:border-darkBgColor"
				/>
				<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
					Bellik:
				</p>
				<textarea
					className="font-oxygen border-[#E6E6E6] w-full rounded resize-none h-24 dark:border-darkBgColor dark:bg-darkBgColor"
					placeholder="Description: type your address or any additional information."
					name="description"
					value={inputs.description}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark dark:bg-darkFirstColor dark:hover:bg-darkFirstColor dark:hover:opacity-80 hover:bg-socialBarItemHover hover:text-white"
				>
					Checkout
				</button>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => {
	const totalData = getTotalCount(state)
	const items = getCartItems(state)
	const orderInvLines = items.map((item: any) => ({
		resId: item.id,
		priceValue: item.priceValue,
		...getTotalCount(state, item.id),
	}))

	return {
		items: items,
		orderInvLines: orderInvLines,
		totalPrice: totalData.totalPrice,
		user: getCurrentUserInfo(state.auth),
		loggedIn: state.auth.loggedIn,
	}
}

const mapDispatchToProps = {
	onIncrease: resourceAddedToCart,
	onDecrease: resourceRemovedFromCart,
	onDelete: resourceAllRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileCheckout)
