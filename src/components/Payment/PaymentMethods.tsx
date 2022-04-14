import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'modules/errors'
import { otherService } from 'sapredux/services'
import { online_payment_methods } from 'sapredux/services/mock_data/payment.mock'
import { serviceConfig } from 'configs'
import { Image } from 'common/Image'

export const PaymentMethods = ({ id, onChange }: any) => {
	const [data, set_data] = useState([])
	const [online_pm_data, set_online_pm_data] = useState([])
	useEffect(() => {
		otherService.fetch_payment_methods().then((response: any) => {
			console.log(response)
			set_data(response)
		})
		if (serviceConfig.onlinePaymentMethods) {
			set_online_pm_data(online_payment_methods)
		}
	}, [])
	const [current_method_id, set_current_method_id] = useState(id || 1)

	return (
		<ErrorBoundary>
			{data.map(({ id, name, description }: any, idx: number) => (
				<div
					className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine"
					key={idx}
					onClick={() => set_current_method_id(id)}
				>
					<div className="row-span-3 p-4 m-auto">
						<input
							className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
							type="radio"
							name={id}
							checked={id === current_method_id ? true : false}
							onClick={() => {
								set_current_method_id(id)
								onChange(id)
							}}
						/>
					</div>
					<div className="col-span-2 mx-0 my-auto">
						<h3 className="text-sm font-semibold dark:text-darkTextWhiteColor">
							{name}
						</h3>
					</div>
					<div className="col-span-2 row-span-2 dark:text-darkText">
						{description}
					</div>
				</div>
			))}

			<ErrorBoundary>
				{online_pm_data &&
					online_pm_data.map(({ id, name, image }: any, idx: number) => (
						<div key={idx}>
							<p>{name}</p>
							<Image src={image} alt={name} forceSrc={true} />
						</div>
					))}
			</ErrorBoundary>
		</ErrorBoundary>
	)
}
