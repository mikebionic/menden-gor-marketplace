import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories } from 'sapredux/selectors'
import SlickSlider from 'common/SlickSlider'
import { routeConstants } from 'navigation'
import MobileSlickCategoryItem from 'mobile/common/MobileSlickCategoryItem'

const SlickCategorySlider: React.FC = (props: any) => {
	const { categories } = props

	return (
		<SlickSlider>
			{categories.map((category: any, idx: number) => (
				<Link
					to={`${routeConstants.vGrid.route}?category=${category.id}&`}
					key={idx}
				>
					<MobileSlickCategoryItem {...category} key={idx} />
				</Link>
			))}
		</SlickSlider>
	)
}

const mapStateToProps = (state: any) => ({
	categories: getCategories(state),
})

export default connect(mapStateToProps)(SlickCategorySlider)
