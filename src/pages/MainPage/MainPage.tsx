import * as R from 'ramda'
import { useTranslation } from 'react-i18next'

import { ProductList } from 'components/ProductList'
import { ErrorIndicator } from 'modules/errors'
import { Spinner } from 'modules/loaders'

import { ErrorBoundary } from 'modules/errors'
import { ResGroup } from 'components/ResGroup'
import { SocialBar } from 'components/SocialBar'
import { Divider } from 'components/Divider'
import BannerWithCategory from 'components/BannerWithCategory'
import { SlickBrandsSlider } from 'components/SlickBrandsSlider'

export const MainPage = ({
	featured_resources,
	discount_resources,
	resource_collections,
	latest_resources,
	featured_resource_loading,
	featured_resource_error,
	discount_resource_loading,
	discount_resource_error,
	latest_resource_loading,
	latest_resource_error,
}: any) => {
	const { t } = useTranslation()

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

	const latestList =
		!latest_resource_loading && !latest_resource_error ? (
			<ProductList data={latest_resources} />
		) : latest_resource_loading && !latest_resource_error ? (
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

				{!R.isEmpty(featured_resources) && (
					<>
						<Divider title={t('common.featured')} />
						{featuredList}
					</>
				)}
				{!R.isEmpty(discount_resources) && (
					<>
						<Divider title={t('common.discounts')} />
						{discountList}
					</>
				)}
				{!R.isEmpty(latest_resources) && (
					<>
						<Divider title={t('common.newest')} />
						{latestList}
					</>
				)}

				{!R.isEmpty(resource_collections) && (
					<div className="grid gap-4 mt-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 place-content-start 2xl:place-items-center">
						{resource_collections.map((collection: any, idx: number) => (
							<ResGroup {...collection} key={idx} />
						))}
					</div>
				)}
				<SocialBar />
			</div>
		</ErrorBoundary>
	)
}
