import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'modules/errors'
import { otherService } from 'sapredux/services'
import { online_payment_methods } from 'sapredux/services/mock_data/payment.mock'
import { serviceConfig } from 'configs'
import { Image } from 'common/Image'
import { getCurrentCurrency } from 'sapredux/helpers'

export const PaymentMethods = ({ id, onChange }: any) => {
	const currency_code = getCurrentCurrency().name
	const [data, set_data] = useState([])
	useEffect(() => {
		otherService.fetch_payment_methods().then((response: any) => {
			set_data(response)
		})
	}, [])
	const [current_method_id, set_current_method_id] = useState(id || 1)

	return (
		<ErrorBoundary>
			{data.map(
				({ id, name, description }: any, idx: number) =>
					!(currency_code === 'USD' && id === 2) &&
					id !== 2 && (
						<div
							className="grid grid-flow-col gap-0 text-justify cursor-pointer place-content-start md:grid-rows-OrderLine md:grid-cols-OrderLine"
							key={idx}
							onClick={() => {
								set_current_method_id(id)
								onChange(id)
							}}
						>
							<div className="row-span-3 m-auto md:p-4 min-phone:p-3">
								<input
									className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
									type="radio"
									name={`method-${name}`}
									checked={id === current_method_id ? true : false}
									onClick={() => {
										set_current_method_id(id)
										onChange(id)
									}}
								/>
							</div>
							<div className="col-span-2 mx-0 my-auto">
								<h3 className="text-sm font-semibold font-oxygen dark:text-darkTextWhiteColor">
									{name}
								</h3>
							</div>
							<div className="col-span-2 row-span-2 font-oxygen dark:text-darkText">
								{description}
							</div>
						</div>
					),
			)}
		</ErrorBoundary>
	)
}

export const OnlinePaymentMethods = ({ id, name, onChange }: any) => {
	const online_pm_data = serviceConfig.onlinePaymentMethods
		? online_payment_methods
		: []
	const [online_method_id, set_online_method_id] = useState(id || 1)
	return (
		<ErrorBoundary>
			{online_pm_data &&
				online_pm_data.map(({ id, name, image }: any, idx: number) => (
					<div
						key={idx}
						className="grid grid-flow-col xl:grid-cols-[max-content_1fr_max-content] text-justify gap-4 place-content-start place-items-center md:ml-10 min-phone:ml-6 cursor-pointer"
						onClick={() => {
							set_online_method_id(id)
							onChange({ id, name })
						}}
					>
						<input
							className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
							type="radio"
							name={`online-${name}`}
							checked={id === online_method_id ? true : false}
						/>
						<p className="font-semibold text-black dark:text-darkTextWhiteColor text-oxygen">
							{name}
						</p>
						<Image
							src={image}
							alt={name}
							forceSrc={true}
							className="object-contain w-14 h-14"
						/>
					</div>
				))}
		</ErrorBoundary>
	)
}
