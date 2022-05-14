import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { routeConstants } from 'navigation'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { GoPackage } from 'react-icons/go'
import { BsInfoCircle, BsMoon } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { BsWallet2 } from 'react-icons/bs'
import { Modal } from './Modal'
import { ErrorBoundary } from 'modules/errors'
import { get_local_data_by_key } from 'sapredux/helpers'
import { otherService } from 'sapredux/services'
import { useTranslation } from 'react-i18next'

import turkmen_icon from './flags/tm.svg'
import english_icon from './flags/us.svg'
import russian_icon from './flags/ru.svg'
import { t } from 'i18next'

export const SettingsList = () => {
	const { i18n } = useTranslation()
	const [openModal, setOpenModal] = useState(false)
	const [modalData, setModalData]: any = useState([])
	const navigate = useNavigate()

	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('dark-theme') || '0',
	)

	const [current_currency, set_current_currency] = useState(
		get_local_data_by_key('currency', false, false) || 'TMT',
	)
	const updateCurrency = (name: any) => {
		set_current_currency(name)
		otherService.setCurrency(name)
	}

	const handleClick = (lang: any) => {
		i18n.changeLanguage(lang)
		otherService.setLanguage(lang)
	}

	useEffect(() => {
		if (parseInt(darkMode)) {
			localStorage.setItem('dark-theme', '1')
			document.documentElement.classList.add('dark')
		} else {
			localStorage.setItem('dark-theme', '0')
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])
	useEffect(() => {
		parseInt(darkMode) && document.documentElement.classList.add('dark')
	})

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
						icon: <img src={turkmen_icon} alt="" className="w-8" />,
						label: 'Türkmen',
						active: i18n.language === 'tk',
						short: 'TKM',
						url: '/tk',
						style: 'tk',
						onClick: () => {
							setOpenModal(false)
							handleClick(`tk`)
						},
					},
					{
						id: 2,
						icon: <img src={english_icon} alt="" className="w-8" />,
						label: 'English',
						active: i18n.language === 'en',
						short: 'ENG',
						url: '/en',
						style: 'en',
						onClick: () => {
							setOpenModal(false)
							handleClick(`en`)
						},
					},
					{
						id: 3,
						icon: <img src={russian_icon} alt="" className="w-8" />,
						label: 'Russian',
						active: i18n.language === 'ru',
						short: 'RUS',
						url: '/ru',
						style: 'ru',
						onClick: () => {
							setOpenModal(false)
							handleClick(`ru`)
						},
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
						icon: <BsSun className="text-2xl" />,
						label: 'Light',
						active: darkMode === '0',
						onClick: () => {
							setDarkMode(darkMode ? '0' : '1')
							setOpenModal(false)
						},
					},
					{
						id: 2,
						icon: <BsMoon className="text-2xl" />,
						label: 'Dark',
						active: darkMode === '1',
						onClick: () => {
							setDarkMode(darkMode ? '1' : '0')
							setOpenModal(false)
						},
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
						onClick: () => updateCurrency('TMT'),
					},
					{
						id: 2,
						label: 'USD',
						active: current_currency === 'USD',
						onClick: () => updateCurrency('USD'),
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
