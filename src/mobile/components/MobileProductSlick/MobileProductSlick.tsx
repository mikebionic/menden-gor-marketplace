import React from 'react'
import SlickSlider from 'common/SlickSlider'
import { MobileProductCard } from 'mobile/components/MobileProductCard'

interface IPropsProductList {
	data?: any
}
const MobileProductSlick: React.FC<IPropsProductList> = ({ data }) => {
	return (
		<SlickSlider>
			{data.map((resource: any, idx: number) => (
				<MobileProductCard key={idx} data={resource} />
			))}
		</SlickSlider>
	)
}

export default MobileProductSlick
