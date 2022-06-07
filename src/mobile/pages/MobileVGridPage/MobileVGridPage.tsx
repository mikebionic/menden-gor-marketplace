import React, { useEffect, useState } from 'react'

import { ProductList } from 'components/ProductList'
import { Spinner } from 'modules/loaders'
import { ErrorBoundary, ErrorIndicator } from 'modules/errors'
import { getResources } from 'sapredux/selectors'
import {
	applyFilters,
	fetchResources,
	loadMoreResources,
} from 'sapredux/actions'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { MdSort } from 'react-icons/md'
import {
	FilterButton,
	MobileProductFilter,
} from 'mobile/components/MobileProductFilter'

const MobileVGridPage: React.FC = (props: any) => {
	const {
		fetchResources,
		resources,
		resource_loading,
		resource_error,
		onFiltersApply,
	} = props

	const navigate = useNavigate()
	const location = useLocation()

	const [cartOpen, setCartOpen] = useState(false)
	const [query_string, set_query_string] = useState('')

	useEffect(() => {
		const params = new URLSearchParams(location.search)
		const history_filters: any = {
			category: params.get('category'),
			brand: params.get('brand'),
			search: params.get('search'),
			from_price: params.get('from_price'),
			to_price: params.get('to_price'),
			division: params.get('division'),
			sort: params.get('sort'),
			showDiscounts: params.get('showDiscounts'),
		}
		let search_querystring = `?`
		Object.keys(history_filters).map((key) => {
			if (history_filters[key]) {
				search_querystring += `${key}=${history_filters[key]}&`
			}
		})
		onFiltersApply(history_filters)
		set_query_string(search_querystring)
		navigate(search_querystring)
	}, [location.search])

	useEffect(() => {
		query_string.length > 2 && fetchResources(query_string)
	}, [query_string])

	const productsList =
		!resource_loading && !resource_error ? (
			<ProductList data={resources} gridClassName="grid-cols-2" />
		) : resource_loading && !resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)

	return (
		<ErrorBoundary>
			<div className="">
				<div className="grid grid-flow-col gap-4 cursor-pointer place-content-center auto-cols-fr">
					<div className="pb-2 font-semibold border-b-2 cursor-pointer text-firstColorGradientFromDark dark:text-darkFirstColor border-firstColorGradientFromDark dark:border-darkFirstColor hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor">
						<p className="text-center font-oxygen">Category</p>
					</div>
					<ErrorBoundary>
						<FilterButton cartOpen={cartOpen} setCartOpen={setCartOpen} />
					</ErrorBoundary>
					<ErrorBoundary>
						<MobileProductFilter open={cartOpen} setOpen={setCartOpen} />
					</ErrorBoundary>
				</div>
				<div>{productsList}</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	resources: getResources(state),
	resource_loading: state.resource.loading,
	resource_error: state.resource.error,
})

const mapDispatchToProps = {
	fetchResources,
	loadMoreResources,
	onFiltersApply: applyFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileVGridPage)
