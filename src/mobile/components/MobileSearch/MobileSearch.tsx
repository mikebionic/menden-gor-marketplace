import React from 'react'

import { IconLabelButton } from 'common/IconLabelButton'
import { AiOutlineSearch } from 'react-icons/ai'

export const MobileSearch: React.FC = () => {
	return (
		<div className="relative w-full h-11 min-w-[200px]">
			<IconLabelButton
				className="absolute items-center w-auto h-4 pl-1 mx-auto mt-[13px] text-sm text-center left-2 text-darkText dark:text-darkTextWhiteColor"
				icon={<AiOutlineSearch className="text-xl" />}
			/>
			<input
				type="text"
				className="w-full px-9 h-full text-sm border rounded-full dark:bg-darkBgColor dark:text-darkTextWhiteColor border-white dark:border-darkFirstColor outline-none placeholder-[#c8c8c8] ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
				placeholder="What are you looking for..."
				name="search_tag"
				// value={search_tag}
				// onChange={handleChange}
			/>
		</div>
	)
}
