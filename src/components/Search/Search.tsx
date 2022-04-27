import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { Transition } from '@headlessui/react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { IconLabelButton } from 'common/IconLabelButton'
import { applyFilters } from 'sapredux/actions'
import { routeConstants } from 'navigation'
import { useTranslation } from 'react-i18next'

const Search: React.FC = (props: any) => {
	const { t } = useTranslation()
	const { filters, onFiltersApply } = props
	const [dropdownState, onDropdownStateChange] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const handleClickAway = () => {
		onDropdownStateChange(false)
	}

	const params = new URLSearchParams(location.search)
	const [inputs, setInputs] = useState({
		search_tag: params.get('search') ?? '',
		categoryId: 0,
	})
	const { search_tag, categoryId } = inputs
	useEffect(() => {
		onFiltersApply({ search: inputs.search_tag })
	}, [inputs])

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		let search_querystring = `?`
		Object.keys(filters).map((key) => {
			if (filters[key]) {
				search_querystring += `${key}=${filters[key]}&`
			}
		})
		navigate(`${routeConstants.vGrid.route}${search_querystring}`)
	}

	const search_types = [
		{
			id: 1,
			name: t('common.products'),
			selected: true,
		},
		{
			id: 2,
			name: t('common.suppliers'),
			selected: false,
		},
	]
	const [current_search_type, set_current_search_type] = useState(
		search_types[0],
	)

	const handleSearchTypeChange = (id: number) => {
		search_types.map((s_type: any) => {
			if (s_type.id === id) {
				s_type.selected = true
				set_current_search_type(s_type)
			} else {
				s_type.selected = false
			}
		})
	}

	const SearchType = () => {
		return (
			<div className="z-50 grid w-32 h-auto mt-4 overflow-x-hidden overflow-y-auto text-base font-medium rounded-md shadow-lg left-12 bg-fullwhite dark:bg-darkComponentColor">
				{search_types.map((s_type: any, idx: number) => (
					<div
						key={idx}
						onClick={() => handleSearchTypeChange(s_type.id)}
						className="w-full p-2 text-center text-black hover:bg-gray-100 hover:text-socialBarItemHover dark:hover:text-darkFirstColor dark:hover:opacity-80 dark:hover:bg-darkComponentColor dark:text-darkTextWhiteColor"
					>
						{s_type.name}
					</div>
				))}
			</div>
		)
	}

	return (
		<form name="navbar_search" action="" onSubmit={handleSubmit}>
			<div className="grid grid-rows-1 mx-auto my-0 w-auto min-w-[520px] md:w-[550px] lg:w-[728px] grid-cols-search z-[9999]">
				<ClickAwayListener onClickAway={handleClickAway}>
					<div
						className="z-10 w-32 h-12 bg-white border-2 border-white border-solid rounded-l-full cursor-pointer dark:border-darkFirstColor bg-gradient-to-l from-firstColorGradientFromDark to-secondColorGradientToLight gap-x-8 dark:bg-gradient-to-l dark:from-darkFirstColor dark:to-darkFirstColor"
						onClick={() =>
							onDropdownStateChange((dropdownState) => !dropdownState)
						}
					>
						<IconLabelButton
							className="flex flex-row-reverse items-center w-auto h-4 pl-1 mx-auto my-3 text-sm text-center text-white cursor-pointer dark:text-darkTextWhiteColor"
							icon={<IoIosArrowDown className="text-sm" />}
							label={current_search_type.name}
						/>
						<Transition
							show={dropdownState}
							enter="transition ease-out duration-300"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-300"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							{dropdownState ? <SearchType /> : null}
						</Transition>
					</div>
				</ClickAwayListener>

				<div className="w-full h-12 bg-white">
					<input
						type="text"
						className="w-full h-full text-sm border dark:bg-darkBgColor dark:text-darkTextWhiteColor border-white dark:border-darkFirstColor outline-none placeholder-[#c8c8c8] ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
						placeholder={t('common.search_placeholder')}
						name="search_tag"
						value={search_tag}
						onChange={handleChange}
					/>
				</div>
				<button
					className="w-32 h-12 bg-white border-2 border-white border-solid rounded-r-full cursor-pointer dark:border-darkFirstColor rsearch_tagotate-180 bg-gradient-to-l from-firstColorGradientFromDark to-secondColorGradientToLight gap-x-8 dark:bg-gradient-to-l dark:from-darkFirstColor dark:to-darkFirstColor"
					type="submit"
				>
					<IconLabelButton
						className="flex items-center w-auto h-4 pl-1 mx-auto my-3 text-sm text-center text-white dark:text-darkTextWhiteColor"
						icon={<AiOutlineSearch className="text-base" />}
						label={t('common.search')}
					/>
				</button>
			</div>
		</form>
	)
}

const mapStateToProps = (state: any) => ({ filters: state.productFilter })
const mapDispatchToProps = { onFiltersApply: applyFilters }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
