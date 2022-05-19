import React from 'react'
import { IconLabelButton } from 'common/IconLabelButton'
import { BiMinus, BiPlus } from 'react-icons/bi'

interface ICountryButton {
	coloredCountry?: boolean
	onIncrease: () => void
	onDecrease: () => void
	count: number
	margin?: string
	size?: string
}

export const AddToCartWithCounter: React.FC<ICountryButton> = ({
	onIncrease,
	onDecrease,
	count,
	coloredCountry = false,
	margin = 'mb-2 mr-2',
	size,
}) => {
	const OnlyButton = ({ margin, size }: any) => (
		<IconLabelButton
			className={`relative bottom-0 right-0 float-right border border-white dark:border-darkComponentColor ${margin} ${size} rounded-md hover:shadow-sm bg-fullwhite dark:bg-darkComponentColor w-9 h-9`}
			icon={
				<BiPlus className="w-full h-full mx-auto my-0 text-thirdColor dark:text-darkFirstColor" />
			}
			label=""
			onClick={onIncrease}
		/>
	)
	const CountButtons = () => {
		return (
			<>
				{coloredCountry ? (
					<div className="grid items-center w-24 grid-cols-3 p-1 text-center border border-solid rounded-lg h-11 border-[#E2E1E1] bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight">
						<button onClick={onDecrease}>
							<BiMinus className="w-full h-full text-white hover:text-secondColorGradientToLight" />
						</button>
						<p className="inline-grid w-full h-full text-lg text-white bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight place-content-around">
							{count}
						</p>
						<button onClick={onIncrease}>
							<BiPlus className="w-full h-full text-white hover:text-secondColorGradientToLight" />
						</button>
					</div>
				) : (
					<div className="grid items-center w-24 grid-cols-3 p-1 text-center border border-solid rounded-lg h-11 border-[#E2E1E1] dark:border-darkBgColor">
						<button onClick={onDecrease}>
							<BiMinus className="w-full h-full text-firstColorGradientFromDark dark:text-darkFirstColor hover:text-secondColorGradientToLight dark:hover:text-darkFirstColor dark:hover:opacity-80" />
						</button>
						<p className="inline-grid w-full h-full text-lg dark:shadow-none shadow-InnerCountryShadow text-firstColorGradientFromDark dark:text-darkFirstColor bg-fullwhite dark:bg-darkBgColor place-content-around">
							{count}
						</p>
						<button onClick={onIncrease}>
							<BiPlus className="w-full h-full text-firstColorGradientFromDark dark:text-darkFirstColor hover:text-secondColorGradientToLight dark:hover:text-darkFirstColor dark:hover:opacity-80" />
						</button>
					</div>
				)}
			</>
		)
	}
	return (
		<div>
			{count > 0 ? (
				<CountButtons />
			) : (
				<OnlyButton margin={margin} size={size} />
			)}
		</div>
	)
}
