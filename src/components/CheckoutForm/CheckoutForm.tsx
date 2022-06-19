import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Input from 'rc-input'
import {
	getCartItems,
	getCurrentUserInfo,
	getTotalCount,
} from 'sapredux/selectors'
import { getCurrentCurrency, sapswal, useSetState } from 'sapredux/helpers'
import {
	PaymentMethods,
	PaymentTypes,
	OnlinePaymentMethods,
} from 'components/Payment'
import { ErrorBoundary } from 'modules/errors'
import { orderService, otherService } from 'sapredux/services'
import { toJsonCheckoutOrderInv } from 'sapredux/services/transform_data'
import { useTranslation } from 'react-i18next'
import { resourceAllRemovedFromCart } from 'sapredux/actions'
import { Spinner } from 'modules/loaders'

const CheckoutForm = (props: any) => {
	const { items, orderInvLines, totalPrice, onDelete, user, loggedIn } = props
	const { t } = useTranslation()
	const [loading, set_loading] = useState(false)
	const [inputs, setInputs, getInputs] = useSetState({
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
	const handleKeyValueChange = async (name: string = '', value: any = '') => {
		await setInputs((inputs) => ({ ...inputs, [name]: value }))
	}

	const handleResponse = (response: any) => {
		let text = `${response.message} \n ${
			response.status === 1 && t('common.view_your_orders_in_profile')
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
				throw t('common.cannot_checkout_an_empty_cart')
			}
			if (
				inputs.description.length < 1 ||
				inputs.name.length < 1 ||
				inputs.phoneNumber.length < 1
			) {
				throw t('common.fill_the_required_fields')
			}
			set_loading(true)
			if (inputs.pmId !== 2) {
				orderService
					.checkoutSaleOrderInv(
						toJsonCheckoutOrderInv({
							...inputs,
							description: `${inputs.description} ${inputs.name} ${inputs.phoneNumber}`,
						}),
						loggedIn,
					)
					.then(
						(response: any) => handleResponse(response),
						(error: any) =>
							errorSwal(
								`${t('common.failed_to_checkout')}: ${error.toString()}`,
							),
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
			set_loading(true)
			await otherService.generate_reg_no().then(
				({ data, status }: any) => {
					if (status !== 1 || data.length < 1) {
						throw 'error'
					}
					setInputs((inputs) => ({
						...inputs,
						orderInvRegNo: data,
						typeId: 13,
					}))
				},
				(error: any) => errorSwal(error.toString()),
			)

			let updatedstate = await getInputs()

			await orderService
				.checkoutSaleOrderInv(
					toJsonCheckoutOrderInv({
						...updatedstate,
						description: `${inputs.description} ${inputs.name} ${inputs.phoneNumber}`,
					}),
					loggedIn,
				)
				.then(
					(response: any) => handle_payment_register(response),
					(error: any) => errorSwal(error.toString()),
				)
		} catch {
			errorSwal()
		}
	}

	const handle_payment_register = async (response: any) => {
		await handleKeyValueChange('orderInvRegNo', response.data.OInvRegNo)
		let updatedstate = await getInputs()
		if (response.status === 1) {
			set_loading(true)
			orderService
				.request_payment_register(
					updatedstate.orderInvRegNo,
					updatedstate.totalPrice,
					updatedstate.online_payment_method,
					updatedstate.description,
				)
				.then(
					({ data }: any) => {
						handleKeyValueChange('payment_window_url', data.checkout_url)
						handleKeyValueChange('orderId', data.OrderId)
						handleKeyValueChange(
							'online_payment_type',
							data.online_payment_type,
						)
						handleKeyValueChange('checkout_url', data.checkout_url)
						if (data.checkout_url.length < 1) {
							throw 'URL not returned'
						}
						open_payment_window(data.checkout_url)
					},
					(error: any) => errorSwal(error.toString()),
				)
		} else {
			errorSwal(t('common.payment_fail_contact_admins'))
			set_loading(false)
		}
	}

	function open_payment_window(url: string) {
		set_loading(true)
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
			set_loading(false)
		}
	}
	//var payment_validated_times = 0
	function detect_window_close(current_window: any) {
		let win_closed_interval = setInterval(() => {
			try {
				if (current_window.closed) {
					clearInterval(win_closed_interval)
					set_loading(false)
					validate_order_inv()
				}
			} catch {
				clearInterval(win_closed_interval)
			}
		}, 500)
	}
	const validate_order_inv = async () => {
		let { orderId, orderInvRegNo, online_payment_method } = await getInputs()
		orderService
			.validate_order_inv(
				orderId,
				orderInvRegNo,
				online_payment_method,
				user.RpAccGuid,
			)
			.then(
				(response: any) => handleResponse(response),
				(error: any) => errorSwal(error.toString()),
			)
	}

	const errorSwal = (text?: string) =>
		sapswal.fire({
			icon: 'error',
			title: t('common.error'),
			text: text || t('common.server_exchange_checkout_error'),
		})

	return (
		<ErrorBoundary>
			{loading && <Spinner />}
			<div className="grid w-full grid-flow-row gap-4 p-4 auto-rows-max shadow-defaultShadow bg-fullwhite dark:bg-darkComponentColor">
				<div className="grid grid-flow-col auto-cols-max place-content-between">
					<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
						{t('common.total')}
					</p>
					<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
						{totalPrice} {getCurrentCurrency().symbol}
					</p>
				</div>

				<p className="text-base font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
					{t('common.payment_type')}
				</p>
				<PaymentTypes
					id={inputs.ptId}
					onChange={(id: any) => handleKeyValueChange('ptId', id)}
				/>

				<p className="text-base font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
					{t('common.payment_method')}
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
					{t('auth.name')}:
				</p>
				<Input
					placeholder={t('common.type_your_name')}
					autoFocus
					type="text"
					name="name"
					value={inputs.name}
					onChange={handleChange}
					inputMode="text"
					className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:bg-darkBgColor hover:border-textColorOrange dark:hover:border-darkFirstColor dark:border-darkBgColor"
				/>
				<p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
					{t('auth.phone_number')}:
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
					{t('common.note')}:
				</p>
				<textarea
					className="font-oxygen border-[#E6E6E6] w-full rounded resize-none h-24 dark:border-darkBgColor dark:bg-darkBgColor"
					placeholder={t('common.type_your_description_additional_info')}
					name="description"
					value={inputs.description}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark dark:bg-darkFirstColor dark:hover:bg-darkFirstColor dark:hover:opacity-80 hover:bg-textColorOrange hover:text-white"
				>
					{t('common.checkout')}
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
	onDelete: resourceAllRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
