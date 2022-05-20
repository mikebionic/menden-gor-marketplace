import React, { useEffect } from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
	fetchFeaturedResources,
	fetchDiscountResources,
} from 'sapredux/actions'
import { getFeaturedResources, getDiscountResources } from 'sapredux/selectors'

import { ErrorBoundary } from 'modules/errors'
import { ProductList } from 'components/ProductList'
import { ErrorIndicator } from 'modules/errors'
import { Spinner } from 'modules/loaders'
import { ResGroup } from 'components/ResGroup'
import { SocialBar } from 'components/SocialBar'
import { Divider } from 'components/Divider'
import BannerWithCategory from 'components/BannerWithCategory'
import { SlickBrandsSlider } from 'components/SlickBrandsSlider'

const MainPage: React.FC = (props: any) => {
	const { t } = useTranslation()
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

	const featuredList =
		!featured_resource_loading && !featured_resource_error ? (
			<ProductList data={featured_resources} />
		) : featured_resource_loading && !featured_resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)

	const discountList =
		!discount_resource_loading && !discount_resource_error ? (
			<ProductList data={discount_resources} />
		) : discount_resource_loading && !discount_resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)

	return (
		<ErrorBoundary>
			<div className="py-16 mx-auto sm:py-24 lg:pb-24 lg:pt-12 lg:px-8 md:pt-8 min-phone:pt-4">
				<BannerWithCategory />

				<div className="my-8">
					<SlickBrandsSlider />
				</div>

				{!R.isEmpty(featuredList) && (
					<>
						<Divider title={t('common.featured')} />
						{featuredList}
					</>
				)}
				{!R.isEmpty(discountList) && (
					<>
						<Divider title={t('common.discounts')} />
						{discountList}
					</>
				)}

				{/*<div className="grid gap-4 mt-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 place-content-start 2xl:place-items-center">
					<ResGroup />
					<ResGroup />
					<ResGroup />
				</div>*/}
				<SocialBar />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
