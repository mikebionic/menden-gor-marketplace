import React from 'react'
import { Link } from 'react-router-dom'

import { Image } from 'common/Image'
import { routeConstants } from 'navigation'
import { getBrands } from 'sapredux/selectors'
import { connect } from 'react-redux'

const Brands: React.FC = (props: any) => {
	const { brands } = props

	return (
		<div className="grid grid-cols-4 gap-2 pt-6">
			{brands.map((data: any, idx: number) => (
				<Link to={`${routeConstants.vGrid.route}?brand=${data.id}&`}>
					<div className="grid w-20 h-20 rounded-md place-items-center bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow">
						<Image
							src={data.icon}
							alt={data.name}
							className="object-contain w-16 h-16 transition_animation"
						/>
					</div>
				</Link>
			))}
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	brands: getBrands(state),
})

export default connect(mapStateToProps)(Brands)
