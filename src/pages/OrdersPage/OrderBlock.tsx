import { Badge, Progress } from 'antd'
import { IconLabelButton } from 'common/IconLabelButton'
import { ErrorBoundary } from 'modules/errors'

import { BsCurrencyDollar } from 'react-icons/bs'

export const OrderBlock = (props: any) => {
	const {
		orderFTotal,
		currencySymbol,
		regNo,
		orderDate,
		orderDesc,
		statusName,
		status_ui,
	} = props

	return (
		<ErrorBoundary>
			<div className="relative grid xl:w-[380px] md:w-[320px] m-4 bg-white dark:bg-darkComponentColor cursor-pointer h-52 shadow-defaultShadow rounded-xl">
				<Badge.Ribbon
					text={`${orderFTotal}${currencySymbol}`}
					color="red"
					placement="end"
					className="mt-1"
				>
					<div className="inline-grid w-full h-full grid-flow-row gap-3 p-4 mt-2 auto-rows-max">
						<p className="text-base font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
							Order-{regNo}
						</p>
						<div className="grid grid-flow-col gap-2 grid-cols-[70%_30%]">
							<Progress
								percent={status_ui.percentage}
								status="exeption"
								strokeColor={status_ui.hash_colors}
								showInfo={false}
								className="dark:opacity-80"
							/>
							<IconLabelButton
								className="w-6 h-5"
								icon={
									<status_ui.icon className="w-full h-full text-black dark:text-darkTextWhiteColor" />
								}
							/>
						</div>
						<div className="inline-grid grid-cols-2 place-content-between gap-4">
							<div>
								<h3 className="text-base font-semibold text-black dark:text-darkTextWhiteColor">
									{statusName}
								</h3>
							</div>
							<div>
								<h3 className="text-base font-semibold text-right text-textColorOrange dark:text-darkFirstColor">
									{orderFTotal} {currencySymbol}
								</h3>
							</div>
						</div>
						<div className="grid grid-cols-2 place-content-between">
							<p className="text-left text-textLightGray font-oxygen dark:text-darkText">
								{orderDesc && orderDesc.length > 50
									? `${orderDesc.slice(0, 40)}...`
									: orderDesc}
							</p>
							<p className="text-right text-textLightGray font-oxygen dark:text-darkText">
								{orderDate}
							</p>
						</div>
					</div>
				</Badge.Ribbon>
			</div>
		</ErrorBoundary>
	)
}
