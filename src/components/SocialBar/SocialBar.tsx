import React from 'react'

import { IconLabelButton } from 'common/IconLabelButton'
import { GrAppleAppStore } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'

const socialBarLinks = [
	{
		url: 'https://instagram.com/sapcozgut',
		icon: (
			<BsInstagram className="h-6 mx-auto my-1 text-white transition-all duration-300 md:w-6 2xl:w-8 2xl:h-8 hover:text-textColorOrange dark:hover:text-darkFirstColor" />
		),
		active: true,
	},
	{
		url: 'mailto:sapcozgut@gmail.com',
		icon: (
			<AiOutlineMail className="h-6 mx-auto my-1 text-white transition-all duration-300 md:w-6 2xl:w-8 2xl:h-8 hover:text-textColorOrange dark:hover:text-darkFirstColor" />
		),
		active: true,
	},
	{
		url: 'https://store.apple.com/sapcozgut',
		icon: (
			<GrAppleAppStore className="h-6 mx-auto my-1 text-white transition-all duration-300 border border-white border-solid round8 md:w-6 2xl:w-8 2xl:h-8 hover:text-textColorOrange dark:hover:text-darkFirstColor hover:border-textColorOrange dark:hover:border-darkFirstColor" />
		),
		active: true,
	},
	{
		url: 'https://play.google.com/sapcozgut',
		icon: (
			<FaGooglePlay className="h-6 mx-auto my-1 text-white transition-all duration-300 md:w-6 2xl:w-8 2xl:h-8 hover:text-textColorOrange dark:hover:text-darkFirstColor" />
		),
		active: true,
	},
]

export const SocialBar: React.FC = () => {
	return (
		<div className="fixed left-0 grid w-8 2xl:w-10 grid-flow-row auto-rows-max place-items-center top-2/4 bg-[#acacac4d] dark:bg-darkComponentColor backdrop-blur-glass ">
			{socialBarLinks.map(
				({ icon, url, active }: any, idx: number) =>
					active && (
						<a href={url} key={idx}>
							<IconLabelButton icon={icon} />
						</a>
					),
			)}
		</div>
	)
}
