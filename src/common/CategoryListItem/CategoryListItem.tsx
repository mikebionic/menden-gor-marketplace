import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import * as R from 'ramda'

import { Image } from 'common/Image'
import { Link } from 'react-router-dom'
import { routeConstants } from 'navigation/routeConstants'

interface ICategoryListItem {
	name: string
	icon: string
	image?: string
	className?: string
	categories?: any
}

export const CategoryListItem: React.FC<ICategoryListItem> = ({
	name,
	icon,
	categories,
}) => {
	return (
		<div className="relative group">
			<button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-textColorOrange bg-fullwhite dark:bg-darkComponentColor grid-cols-search h-11 2xl:h-14">
				<Image
					src={icon}
					alt={name}
					className="w-6 h-6 2xl:h-8 2xl:w-8 pl-1 text-white dark:text-darkTextWhiteColor dark:brightness-[4] filter-green"
				/>
				<h4 className="ml-4 text-left text-base 2xl:text-lg text-[#5B5B5B] dark:text-darkTextWhiteColor">
					{name}
				</h4>
				<MdOutlineKeyboardArrowRight className="mr-2 dark:text-darkTextWhiteColor hover:text-textColorOrange 2xl:w-5 2xl:h-5" />
			</button>

			{categories.length > 1 && (
				<div className="absolute opacity-0 top-0 left-[100%] z-[99999] bg-fullwhite rounded-lg transition_animation shadow-defaultShadow w-max group-hover:py-2 group-hover:opacity-100 group-hover:visible invisible mt-1 ml-1">
					{categories.map((item: any, idx: number) => (
						<Link to={`${routeConstants.vGrid.route}?category=${item.id}&`}>
							<ul
								key={idx}
								className="grid w-full h-full px-5 py-2 place-items-center hover:bg-gray-100 dark:group-hover:bg-darkComponentColor"
							>
								<li className="text-center text-base 2xl:text-lg w-full text-[#5B5B5B] dark:text-darkTextWhiteColor ">
									{item.name}
								</li>
							</ul>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
