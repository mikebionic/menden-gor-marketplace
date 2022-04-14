import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'modules/errors'
import { otherService } from 'sapredux/services'

export const PaymentTypes = ({ id, onChange }: any) => {
	const [data, set_data] = useState([])
	useEffect(() => {
		otherService
			.fetch_payment_types()
			.then((response: any) => set_data(response))
	}, [])
	const [current_type_id, set_current_type_id] = useState(id || 1)
	return (
		<ErrorBoundary>
			{data.map(({ id, name, description }: any, idx: number) => (
				<div
					className="grid grid-flow-col gap-0 cursor-pointer grid-rows-OrderLine grid-cols-OrderLine"
					key={idx}
					onClick={() => {
						set_current_type_id(id)
						onChange(id)
					}}
				>
					<div className="row-span-3 p-4 m-auto">
						<input
							className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
							type="radio"
							name={`type-${name}`}
							checked={id === current_type_id ? true : false}
							onClick={() => {
								set_current_type_id(id)
								onChange(() => id)
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
			))}
		</ErrorBoundary>
	)
}
