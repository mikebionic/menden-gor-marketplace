import { ErrorBoundary, ErrorIndicator } from 'modules/errors'
import MobileBanner from 'mobile/components/MobileBanner'
import SlickCategorySlider from 'mobile/components/SlickCategorySlider/SlickCategorySlider'
import { Divider } from 'components/Divider'
import { ResGroup } from 'components/ResGroup'
import MobileProductSlick from 'mobile/components/MobileProductSlick'
import { Spinner } from 'modules/loaders'
import { useTranslation } from 'react-i18next'
import { routeConstants } from 'navigation'
import { SlickBrandsSlider } from 'components/SlickBrandsSlider'
import * as R from 'ramda'

const MobileMainPage: React.FC = ({
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
	const featuredProductSlick =
		!featured_resource_loading && !featured_resource_error ? (
			<MobileProductSlick data={featured_resources} />
		) : featured_resource_loading && !featured_resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)

	const discountProductSlick =
		!discount_resource_loading && !discount_resource_error ? (
			<MobileProductSlick data={discount_resources} />
		) : discount_resource_loading && !discount_resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)
	const latestProductSlick =
		!latest_resource_loading && !latest_resource_error ? (
			<MobileProductSlick data={latest_resources} />
		) : latest_resource_loading && !latest_resource_error ? (
			<Spinner />
		) : (
			<ErrorIndicator />
		)

	return (
		<ErrorBoundary>
			<div>
				<MobileBanner />
				<Divider title={t('common.categories')} mobile={true} />
				<SlickCategorySlider />

				<Divider title={t('common.brands')} mobile={true} />
				<SlickBrandsSlider mobile={true} />

				{!R.isEmpty(featuredProductSlick) && (
					<>
						<Divider
							title={t('common.new_arrives')}
							mobile={true}
							url={`${routeConstants.vGrid.route}`}
						/>
						{featuredProductSlick}
					</>
				)}
				{!R.isEmpty(discountProductSlick) && (
					<>
						<Divider
							title={t('common.just_for_you')}
							mobile={true}
							url={`${routeConstants.vGrid.route}/?showDiscounts=1&`}
						/>
						{discountProductSlick}
					</>
				)}
				{!R.isEmpty(latest_resources) && (
					<>
						<Divider
							title={t('common.newest')}
							mobile={true}
							url={`${routeConstants.vGrid.route}?sort=newest`}
						/>
						{latestProductSlick}
					</>
				)}

				{!R.isEmpty(resource_collections) && (
					<div className="grid grid-flow-col gap-4 auto-cols-max">
						{resource_collections.map((collection: any, idx: number) => (
							<ResGroup {...collection} mobile={true} />
						))}
					</div>
				)}
			</div>
		</ErrorBoundary>
	)
}

export default MobileMainPage
