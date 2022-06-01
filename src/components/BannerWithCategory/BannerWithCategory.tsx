import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { CarouselSlider } from 'components/Carousel'
import { CategoryListItem } from 'common/CategoryListItem'
import { CategoryList } from 'common/CategoryList'
import { getCategories, getSliderByName } from 'sapredux/selectors'
import { ErrorBoundary } from 'modules/errors'
import { namesConfig } from 'configs'
import { routeConstants } from 'navigation'

const BannerWithCategory: React.FC = (props: any) => {
	const { categories, header_slider } = props

	return (
		<ErrorBoundary>
			<div className="grid w-full h-auto gap-4 relative px-4 mx-auto bg-fullwhite dark:bg-darkComponentColor grid-cols-[30%_70%] sm:px-6 lg:max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[110rem] lg:px-8 lg:pb-4 lg:pt-8 md:pt-6 md:pb-2">
				<CategoryList>
					{categories.map((category: any, idx: number) => (
						<Link
							key={idx}
							to={`${routeConstants.vGrid.route}?category=${category.id}&`}
						>
							<CategoryListItem key={idx} {...category} />
						</Link>
					))}
				</CategoryList>
				<div>
					{!!header_slider ? (
						<CarouselSlider images={header_slider.images} />
					) : null}
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	categories: getCategories(state),
	header_slider: getSliderByName(
		state.slider.data,
		namesConfig.main_page_slider_name,
	),
})

export default connect(mapStateToProps)(BannerWithCategory)
