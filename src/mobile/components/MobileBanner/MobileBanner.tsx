import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSliders } from 'sapredux/actions'
import { getSliderByName } from 'sapredux/selectors'
import { ErrorBoundary } from 'modules/errors'
import { namesConfig } from 'configs'
import { MobileCarouselSlider } from 'mobile/components/MobileCarouselSlider'

const BannerWithCategory: React.FC = (props: any) => {
	const { fetchSliders, header_slider } = props

	useEffect(() => {
		fetchSliders()
	}, [fetchSliders])

	return (
		<ErrorBoundary>
			<div className="pt-[35%]">
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

const mapDispatchToProps = { fetchSliders }

export default connect(mapStateToProps, mapDispatchToProps)(BannerWithCategory)
