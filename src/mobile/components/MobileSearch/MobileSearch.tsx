import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

import { IconLabelButton } from 'common/IconLabelButton'
import { applyFilters } from 'sapredux/actions'
import { routeConstants } from 'navigation'

const MobileSearch: React.FC = ({ filters, onFiltersApply }: any) => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const location = useLocation()

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

	return (
		<form name="navbar_search" action="" onSubmit={handleSubmit}>
			<div className="relative w-full h-11 min-w-[200px]">
				<IconLabelButton
					className="absolute items-center w-auto h-4 pl-1 mx-auto mt-[13px] text-sm text-center left-2 text-darkText dark:text-darkTextWhiteColor"
					icon={<AiOutlineSearch className="text-xl" />}
				/>
				<input
					type="text"
					className="w-full px-9 h-full text-sm border rounded-full dark:bg-darkBgColor dark:text-darkTextWhiteColor border-white dark:border-darkFirstColor outline-none placeholder-[#c8c8c8] ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
					placeholder={t('common.search_placeholder')}
					name="search_tag"
					value={search_tag}
					onChange={handleChange}
				/>
			</div>
		</form>
	)
}

const mapStateToProps = (state: any) => ({ filters: state.productFilter })
const mapDispatchToProps = { onFiltersApply: applyFilters }

export default connect(mapStateToProps, mapDispatchToProps)(MobileSearch)
