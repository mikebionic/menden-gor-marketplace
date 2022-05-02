import React, { useEffect, useState } from 'react'
import { Image } from 'common/Image'
import { connect } from 'react-redux'
import { getCategories } from 'sapredux/selectors'

const style = {
	onScroll: 'top-[5rem] transition_animation h-[83%]',
	onFixed: 'top-[8rem] transition_animation h-[75%]',
}

const Categories: React.FC = (props: any) => {
	const { categories } = props
	const [scrollStyle, set_scrollStyle]: any = useState(style.onFixed)
	const [selectedCategory, set_selectedCategory]: any = useState({})

	useEffect(() => {
		categories && set_selectedCategory(categories[0])
	}, [categories])

	window.onscroll = function () {
		let detectScroll = document.documentElement.scrollTop
		if (detectScroll > 55) {
			set_scrollStyle(style.onScroll)
		} else {
			set_scrollStyle(style.onFixed)
		}
	}
	return (
		<div className="mt-2 grid grid-cols-[1fr_auto]">
			<div className="grid grid-cols-2 gap-2 mt-6 place-items-center place-self-start">
				{selectedCategory
					? selectedCategory.categories.length > 0
						? selectedCategory.categories.map((data: any) => (
								//add a Link or onclick here
								<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
									<Image src={data.icon} />
								</div>
						  ))
						: 'Nothing here...'
					: 'Select a category'}
			</div>
			<div
				className={`grid grid-flow-row gap-[1px] auto-rows-max overflow-y-auto fixed right-0 ${scrollStyle}`}
			>
				{categories.map((data: any) => (
					<div
						className="w-24 h-24 bg-fullwhite shadow-defaultShadow"
						onClick={() => set_selectedCategory(data)}
					>
						<Image src={data.icon} />
					</div>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	categories: getCategories(state),
})

export default connect(mapStateToProps)(Categories)
