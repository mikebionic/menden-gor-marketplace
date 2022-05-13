import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { routeConstants } from 'navigation'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { GoPackage } from 'react-icons/go'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { BsWallet2 } from 'react-icons/bs'
import { Modal } from './Modal'
import { ErrorBoundary } from 'modules/errors'
import { get_local_data_by_key } from 'sapredux/helpers'
import { otherService } from 'sapredux/services'

export const SettingsList = () => {
	const { t } = useTranslation()
	const [openModal, setOpenModal] = useState(false)
	const [modalData, setModalData]: any = useState([])
	const navigate = useNavigate()

	const [current_currency, set_current_currency] = useState(
		get_local_data_by_key('currency', false, false) || 'TMT',
	)
	const updateCurrency = ({ name }: any) => {
		set_current_currency(name)
		otherService.setCurrency(name)
	}

	const settingsItems: any = [
		{
			icon: <GoPackage />,
			label: routeConstants.orders.name,
			onClick: () => navigate(routeConstants.orders.route),
		},
		{
			icon: <BsInfoCircle />,
			label: routeConstants.payment_and_delivery_info.name,
			onClick: () => navigate(routeConstants.payment_and_delivery_info.route),
		},
		{
			icon: <MdOutlineAlternateEmail />,
			label: routeConstants.contact.name,
			onClick: () => navigate(routeConstants.contact.route),
		},
		{
			icon: <BsInfoCircle />,
			label: routeConstants.about.name,
			onClick: () => navigate(routeConstants.about.route),
		},
		{
			icon: <MdLanguage />,
			label: t('common.language'),
			currentType: '',
			onClick: () => {
				setOpenModal(true)
				setModalData([
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
				])
			},
		},
		{
			icon: <BsSun />,
			label: t('common.theme'),
			currentType: '',
			onClick: () => {
				setOpenModal(true)
				setModalData([
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
				])
			},
		},
		{
			icon: <BsWallet2 />,
			label: t('common.currency'),
			currentType: '',
			onClick: () => {
				setOpenModal(true)
				setModalData([
					{
						id: 1,
						label: 'TMT',
						active: current_currency === 'TMT',
						onClick: () => {
							updateCurrency('TMT')
						},
					},
					{
						id: 2,
						label: 'USD',
						active: current_currency === 'USD',
						onClick: () => {
							updateCurrency('USD')
						},
					},
				])
			},
		},
	]

	return (
		<div className="relative">
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

			{openModal ? (
				<ErrorBoundary>
					<Modal
						openModal={openModal}
						setOpenModal={setOpenModal}
						data={modalData}
					/>
				</ErrorBoundary>
			) : null}
		</div>
	)
}
