
import { Badge, Progress } from 'antd';

export const OrderBlock = (props:any) => {

	const {
		orderFTotal,
		currencySymbol,
		regNo,
		orderDesc,
		orderDate,
		statusName,
	} = props

	return (
		<div className="relative grid mx-4 my-4 bg-white cursor-pointer w-ResGroup h-52 shadow-ResGroupShadow rounded-xl">
			<Badge.Ribbon text={`${orderFTotal}${currencySymbol}`} color="red" placement="end" className="mt-1">
				<div className="inline-grid w-full h-full gap-3 p-4 mt-2">
					<p className="text-base font-semibold">Order {regNo}</p>
					<Progress
						percent={70}
						status="active"
						strokeColor="rgba(254, 159, 118)"
						showInfo={false}
					/>
				</div>
			</Badge.Ribbon>
			<p>{orderDesc}</p>
			<p>Date: {orderDate}</p>
			<Badge.Ribbon
				text={statusName}
				color="orange"
				placement="start"
			></Badge.Ribbon>
		</div>
	)
}