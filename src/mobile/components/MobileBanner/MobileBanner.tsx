import React from 'react'
import { connect } from 'react-redux'

import { getSliderByName } from 'sapredux/selectors'
import { ErrorBoundary } from 'modules/errors'
import { namesConfig } from 'configs'
import { MobileCarouselSlider } from 'mobile/components/MobileCarouselSlider'

const BannerWithCategory: React.FC = (props: any) => {
	const { header_slider } = props

	return (
		<ErrorBoundary>
			<div>
				<div>
					{!!header_slider ? (
						<MobileCarouselSlider images={header_slider.images} />
					) : null}
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	header_slider: getSliderByName(
		state.slider.data,
		namesConfig.main_page_slider_name,
	),
})

export default connect(mapStateToProps)(BannerWithCategory)
