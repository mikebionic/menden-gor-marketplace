import React from 'react'
import Slider from 'react-slick'

interface ISlickSlider {
	settings?: any
	children?: any
}

const SlickSlider: React.FC<ISlickSlider> = ({ settings, children }) => {
	const configured_settings = {
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 5,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		...settings,
	}
	const slidesToShow =
		window.innerWidth < 768 && window.innerWidth > 769
			? 4
			: configured_settings.slidesToShow

	return (
		<div className="cursor-pointer">
			<Slider {...configured_settings} slidesToShow={slidesToShow}>
				{children}
			</Slider>
		</div>
	)
}

export default SlickSlider
