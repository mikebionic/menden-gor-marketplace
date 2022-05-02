import React, { useState } from 'react'
import { routeConstants } from 'navigation'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Image } from 'common/Image'

import { GoPackage } from 'react-icons/go'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { BsWallet2 } from 'react-icons/bs'

export const SettingsList = () => {
	const [openModal, setOpenModal] = useState(false)

	const settingsItems: any = [
		{
			icon: <GoPackage />,
			label: routeConstants.orders.name,
			route: routeConstants.orders.route,
			onClick: '',
		},
		{
			icon: <BsInfoCircle />,
			label: routeConstants.payment_and_delivery_info.name,
			route: routeConstants.payment_and_delivery_info.route,
			onClick: '',
		},
		{
			icon: <MdOutlineAlternateEmail />,
			label: routeConstants.contact.name,
			route: routeConstants.contact.route,
			onClick: '',
		},
		{
			icon: <BsInfoCircle />,
			label: routeConstants.about.name,
			route: routeConstants.about.route,
			onClick: () => console.log('fuck Clicked'),
		},
		{
			icon: <MdLanguage />,
			label: 'Language',
			currentType: '',
			onClick: () => setOpenModal(false),
			containItems: [
				{
					id: 1,
					icon: '',
					label: 'Turkmen',
					active: true,
				},
				{
					id: 2,
					icon: '',
					label: 'English',
					active: false,
				},
				{
					id: 3,
					icon: '',
					label: 'Russian',
					active: false,
				},
			],
		},
		{
			icon: <BsSun />,
			label: 'Theme',
			currentType: '',
			onClick: () => setOpenModal(false),
			containItems: [
				{
					id: 1,
					icon: '',
					label: 'Light',
					active: true,
				},
				{
					id: 2,
					icon: '',
					label: 'Dark',
					active: false,
				},
			],
		},
		{
			icon: <BsWallet2 />,
			label: 'Currency',
			currentType: '',
			onClick: () => setOpenModal(false),
			containItems: [
				{
					id: 1,
					label: 'TMT',
					active: true,
				},
				{
					id: 2,
					label: 'USD',
					active: false,
				},
			],
		},
	]

	return (
		<div className="grid grid-flow-row gap-3 mt-4">
			{settingsItems.map((item: any, idx: number) => (
				<div className="relative group" onClick={item.onClick} key={idx}>
					<button className="inline-grid items-center w-full rounded-md cursor-pointer hover:relative shadow-defaultShadow hover:text-socialBarItemHover bg-fullwhite dark:bg-darkComponentColor grid-cols-search h-11 2xl:h-14">
						<div className="pl-2 text-lg text-textColorOrange dark:text-darkTextWhiteColor">
							{item.icon}
						</div>
						<h4 className="ml-4 text-left text-base text-[#5B5B5B] dark:text-darkTextWhiteColor">
							{item.label}
						</h4>
						<MdOutlineKeyboardArrowRight className="mr-2 dark:text-darkTextWhiteColor text-socialBarItemHover 2xl:w-5 2xl:h-5" />
					</button>
				</div>
			))}
		</div>
	)
}
