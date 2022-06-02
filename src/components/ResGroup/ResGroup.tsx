import React from 'react'
import { IconLabelButton } from 'common/IconLabelButton'
import { MdOutlineWebAsset } from 'react-icons/md'
import { ProductCard } from 'components/ProductCard'

interface IPropsResGroup {
	mobile?: boolean
}

export const ResGroup: React.FC<IPropsResGroup> = ({
	mobile = false,
	name,
	resources,
}: any) => {
	return mobile ? (
		<div className="grid mt-4 bg-white dark:bg-darkComponentColor w-[165px] h-24 shadow-defaultShadow rounded-xl">
			<IconLabelButton
				icon={
					<MdOutlineWebAsset className="text-black dark:text-darkTextWhiteColor" />
				}
				label={name}
				className="grid items-center grid-flow-col grid-rows-1 gap-1 ml-4 auto-cols-max dark:text-darkTextWhiteColor"
				labelClassName="text-black dark:text-darkTextWhiteColor text-xs font-oxygen"
			/>
			<div className="grid grid-cols-2 grid-rows-1 gap-2 ml-2 ">
				{resources.map((resource: any, idx: number) => (
					<ProductCard key={idx} data={resource} />
				))}
				<div className="rounded-md w-16 h-12 bg-[#FBFBFB] dark:bg-darkBgColor"></div>
				<div className="rounded-md w-16 h-12 bg-[#FBFBFB] dark:bg-darkBgColor"></div>
			</div>
		</div>
	) : (
		<div className="grid mt-4 bg-white dark:bg-darkComponentColor w-[380px] h-52 shadow-defaultShadow rounded-xl">
			<IconLabelButton
				icon={
					<MdOutlineWebAsset className="text-black dark:text-darkTextWhiteColor" />
				}
				label={name}
				className="flex items-center grid-rows-1 ml-4 grid-cols-icon dark:text-darkTextWhiteColor"
			/>
			<div className="grid grid-cols-2 grid-rows-1 ml-2 ">
				{resources.map((resource: any, idx: number) => (
					<ProductCard key={idx} data={resource} />
				))}
				<div className="rounded-md w-44 h-28 bg-[#FBFBFB] dark:bg-darkBgColor"></div>
				<div className="rounded-md w-44 h-28 bg-[#FBFBFB] dark:bg-darkBgColor"></div>
			</div>
		</div>
	)
}
