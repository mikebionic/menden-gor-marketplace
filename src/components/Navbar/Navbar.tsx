import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsMoon } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { MdSort } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { Transition } from '@headlessui/react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { routeConstants } from 'navigation'
import { Cart, CartButton } from 'components/Cart'
import { Search } from 'components/Search'
import LangButton from 'components/LangButton'
import CurrencyButton from 'components/CurrencyButton'
import NavbarProfileDropdown from 'components/NavbarProfileDropdown'
import { ErrorBoundary } from 'modules/errors'
import { IconLabelButton } from 'common/IconLabelButton'
import { CategoryListItem } from 'common/CategoryListItem'
import logo_white from 'common/images/logo_white.svg'
import { useTranslation } from 'react-i18next'

const mobileResponsive = {
	mobileView: 'fixed bottom-0 z-[100] w-full bg-white',
	desktopView: 'fixed z-[100] min-w-[100vw] bg-white',
}

const classes =
	window.innerWidth < 768
		? mobileResponsive.mobileView
		: mobileResponsive.desktopView

export const Navbar = (props: any) => {
	const { t } = useTranslation()
	const { categories } = props
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('dark-theme') || '0',
	)
	const [cartOpen, setCartOpen] = useState(false)
	const [dropdownState, onDropdownStateChange] = useState(false)
	const [categoryDropdownState, onCategoryDropdownStateChange] = useState(false)

	const location = useLocation()
	useEffect(() => {
		onCategoryDropdownStateChange(false)
		setCartOpen(false)
	}, [location.pathname])

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

	const handleClickAway = () => {
		onCategoryDropdownStateChange(false)
	}

	const CategoryItem = () => {
		return (
			<div className="absolute grid w-full grid-flow-row p-2 overflow-x-hidden overflow-y-auto shadow-lg auto-rows-max h-80 2xl:h-96 mt-[2px] left-12 bg-fullwhite dark:bg-darkComponentColor">
				{categories.map((category: any, idx: number) => (
					<Link
						to={`${routeConstants.vGrid.route}?category=${category.id}`}
						key={idx}
					>
						<CategoryListItem {...category} />
					</Link>
				))}
			</div>
		)
	}

	return (
		<ErrorBoundary>
			<div className="fixed w-full z-[999]">
				<header className="top-0 left-0 grid w-full h-20 grid-rows-1 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight dark:bg-gradient-to-r dark:from-darkComponentColor dark:to-darkComponentColor">
					{/* first row */}
					<div className="inline-grid items-center w-full grid-rows-1 mx-auto my-2 xl:grid-cols-[15rem_50rem_8rem] md:grid-cols-[auto_auto_auto] 2xl::grid-cols-[auto_auto_auto] 3xl:grid-cols-[auto_auto_auto] 3xl:grid-cols- 3xl:gap-24 2xl:gap-16">
						<div className="w-36 h-5 mx-auto my-0">
							<Link to={routeConstants.root.route}>
								<img src={logo_white} alt="logo" />
							</Link>
						</div>
						<Search />

						<NavbarProfileDropdown />
					</div>
				</header>
				<header className="top-0 left-0 w-full h-12 border-b border-white shadow-md dark:border-darkFirstColor bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight relarive dark:bg-gradient-to-r dark:from-darkComponentColor dark:to-darkComponentColor">
					{/* second row */}
					<div className="w-full border-t border-white dark:border-darkFirstColor">
						<ClickAwayListener onClickAway={handleClickAway}>
							<div className="absolute float-left border-r border-white dark:border-darkFirstColor h-[46px]">
								<IconLabelButton
									className="inline-grid items-center grid-rows-1 px-0 py-2 mx-16 text-lg font-medium text-white dark:text-darkTextWhiteColor grid-cols-icon"
									icon={
										<MdSort className="text-2xl text-white dark:text-darkTextWhiteColor" />
									}
									label={t('common.categories')}
									onClick={() =>
										onCategoryDropdownStateChange(
											(categoryDropdownState) => !categoryDropdownState,
										)
									}
								/>

								<Transition
									show={categoryDropdownState}
									enter="transition ease-out duration-300"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-300"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									{categoryDropdownState ? <CategoryItem /> : null}
								</Transition>
							</div>
						</ClickAwayListener>
						<div className="relative grid float-right grid-flow-col grid-rows-[2.75rem] gap-2 mr-4 auto-cols-max">
							<button
								onClick={() => setDarkMode(parseInt(darkMode) ? '0' : '1')}
								className="relative"
							>
								{parseInt(darkMode) ? (
									<IconLabelButton
										className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid dark:text-darkTextWhiteColor dark:border-darkFirstColor "
										icon={
											<BsSun className="w-6 h-6 ml-3 mr-1 text-2xl text-white dark:text-darkTextWhiteColor" />
										}
										id="darkButton"
									/>
								) : (
									<IconLabelButton
										className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid dark:text-darkTextWhiteColor dark:border-darkFirstColor "
										icon={
											<BsMoon className="w-6 h-6 ml-3 mr-1 text-2xl text-white dark:text-darkTextWhiteColor" />
										}
										id="darkButton"
									/>
								)}
							</button>
							<div>
								<LangButton
									className="absolute"
									onDropdownStateChange={onDropdownStateChange}
									dropdownState={dropdownState}
								/>
							</div>
							<div className="relative grid">
								<CurrencyButton />
							</div>
							<Link to={`${routeConstants.wishlist.route}`}>
								<IconLabelButton
									className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid dark:text-darkTextWhiteColor dark:border-darkFirstColor"
									icon={
										<FaRegHeart className="w-6 h-6 ml-3 mr-1 text-2xl text-white dark:text-darkTextWhiteColor" />
									}
								/>
							</Link>
							<ErrorBoundary>
								<CartButton cartOpen={cartOpen} setCartOpen={setCartOpen} />
							</ErrorBoundary>
							<ErrorBoundary>
								<Cart open={cartOpen} setOpen={setCartOpen} />
							</ErrorBoundary>
						</div>
					</div>
				</header>
			</div>
		</ErrorBoundary>
	)
}
