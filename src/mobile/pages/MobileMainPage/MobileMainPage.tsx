import React, { useEffect } from 'react'

import { ErrorBoundary, ErrorIndicator } from 'modules/errors'
import MobileBanner from 'mobile/components/MobileBanner'
import SlickCategorySlider from 'mobile/components/SlickCategorySlider/SlickCategorySlider'
import { Divider } from 'components/Divider'
import { ResGroup } from 'components/ResGroup'
import MobileProductSlick from 'mobile/components/MobileProductSlick'
import { connect } from 'react-redux'
import {
	fetchDiscountResources,
	fetchFeaturedResources,
} from 'sapredux/actions'
import { getDiscountResources, getFeaturedResources } from 'sapredux/selectors'
import { Spinner } from 'modules/loaders'

const MobileMainPage: React.FC = (props: any) => {
	const {
		featured_resources,
		discount_resources,
		fetchFeaturedResources,
		fetchDiscountResources,
		discount_resource_loading,
		discount_resource_error,
		featured_resource_loading,
		featured_resource_error,
	} = props

	useEffect(() => {
		fetchFeaturedResources()
		fetchDiscountResources()
	}, [])

	const featuredProductSlick =
		!featured_resource_loading && !featured_resource_error ? (
			<MobileProductSlick data={featured_resources} />
		) : featured_resource_loading && !featured_resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)

	return (
		<ErrorBoundary>
			<div className="">
				<MobileBanner />
				<Divider title="Categories" mobile={true} />
				<SlickCategorySlider />
				<div className="grid grid-flow-col gap-4 auto-cols-max">
					<ResGroup mobile={true} />
					<ResGroup mobile={true} />
				</div>
				<Divider title="Just for you" mobile={true} />
				{featuredProductSlick}
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	featured_resources: getFeaturedResources(state),
	discount_resources: getDiscountResources(state),
	discount_resource_loading: state.discountResourceIds.loading,
	discount_resource_error: state.discountResourceIds.error,
	featured_resource_loading: state.featuredResourceIds.loading,
	featured_resource_error: state.featuredResourceIds.error,
})

const mapDispatchToProps = {
	fetchFeaturedResources,
	fetchDiscountResources,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMainPage)
