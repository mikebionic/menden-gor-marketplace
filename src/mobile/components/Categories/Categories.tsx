import React, { useState } from 'react'
import { Image } from 'common/Image'

const style = {
	onScroll: 'top-[5rem] transition_animation h-[83%]',
	onFixed: 'top-[8rem] transition_animation h-[75%]',
}

export const Categories: React.FC = () => {
	const [scrollStyle, set_scrollStyle]: any = useState(style.onFixed)

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
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="h-32 w-[120px] bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
			</div>
			<div
				className={`grid grid-flow-row gap-[1px] auto-rows-max overflow-y-auto fixed right-0 ${scrollStyle}`}
			>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
				<div className="w-24 h-24 bg-fullwhite shadow-defaultShadow">
					<Image src="" />
				</div>
			</div>
		</div>
	)
}
