import React from 'react'
import { Image } from 'common/Image'

export const Categories: React.FC = () => {
	return (
		<div className="mt-2 grid grid-cols-[1fr_auto]">
			<div className="grid grid-cols-2 gap-2">
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
			<div>Hello</div>
		</div>
	)
}
