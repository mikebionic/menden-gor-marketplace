import { useState } from 'react'
import { BsWallet2 } from 'react-icons/bs'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { DropdownMenu } from 'common/DropdownMenu'
import { IconLabelButton } from 'common/IconLabelButton'
import { otherService } from 'sapredux/services'
import { get_local_data_by_key } from 'sapredux/helpers'

const CurrencyButton = () => {
	const [current_currency, set_current_currency] = useState(
		get_local_data_by_key('currency', false, false) || 'TMT',
	)
	const updateCurrency = ({ name }: any) => {
		set_current_currency(name)
		otherService.setCurrency(name)
	}

	const currencyItems = [
		{ name: 'TMT', symbol: 'm' },
		{ name: 'USD', symbol: '$' },
	]

	return (
		<div>
			<DropdownMenu
				items={currencyItems}
				menuButtonLabel="Options"
				menuButtonIcon={
					<ChevronDownIcon className="w-full h-full text-white dark:text-darkTextWhiteColor" />
				}
				className="w-20"
				activeClassName="hover:bg-gray-100 text-white"
				onItemClick={(e: any) => updateCurrency(e)}
				menuButton={
					<>
						<IconLabelButton
							className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid dark:text-darkTextWhiteColor dark:border-darkFirstColor"
							icon={
								<BsWallet2 className="w-6 h-6 mx-3 text-2xl text-white dark:text-darkTextWhiteColor" />
							}
						/>
						<span className="absolute top-0 font-semibold text-white dark:text-darkTextWhiteColor left-[70%] text-[10px]">
							{current_currency}
						</span>
					</>
				}
			/>
		</div>
	)
}

export default CurrencyButton
