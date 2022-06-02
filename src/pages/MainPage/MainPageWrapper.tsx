import React from 'react'
import { connect } from 'react-redux'

import {
	getFeaturedResources,
	getDiscountResources,
	getLatestResources,
	getResourceCollections,
} from 'sapredux/selectors'

import { MainPage } from 'pages/MainPage'
import { MobileMainPage } from 'mobile/pages/MobileMainPage'

const MainPageWrapper: React.FC = (props: any) => {
	return window.innerWidth < 768 ? (
		<MobileMainPage {...props} />
	) : (
		<MainPage {...props} />
	)
}

const mapStateToProps = (state: any) => ({
	featured_resources: getFeaturedResources(state),
	discount_resources: getDiscountResources(state),
	latest_resources: getLatestResources(state),
	resource_collections: getResourceCollections(state),
	discount_resource_loading: state.discountResourceIds.loading,
	discount_resource_error: state.discountResourceIds.error,
	featured_resource_loading: state.featuredResourceIds.loading,
	featured_resource_error: state.featuredResourceIds.error,
	latest_resource_loading: state.latestResourceIds.loading,
	latest_resource_error: state.latestResourceIds.error,
})

export default connect(mapStateToProps)(MainPageWrapper)
