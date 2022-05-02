import React from 'react'

import { routeConstants } from 'navigation'
import { Link } from 'react-router-dom'

export const AboutPage: React.FC = () => {
	return (
		<div className="w-full px-0 md:py-16">
			<div className="grid items-center justify-around w-full gap-4 mx-auto my-8 lg:grid-flow-col lg:auto-cols-auto md:grid-flow-row md:auto-rows-max">
				<img
					className="h-auto col-start-1 col-end-2 mx-auto my-0 gap-x-2 w-96"
					src="https://cdn.pixabay.com/photo/2021/02/14/11/41/monkeys-6014204_1280.jpg"
					alt=""
				/>
				<div className="w-auto py-0 mx-auto my-0 font-serif md:px-8">
					<h1 className="mb-5 font-bold text-black capitalize dark:text-darkTextWhiteColor min-phone:text-3xl min-phone:text-center md:text-7xl">
						About us
					</h1>
					<h5 className="mb-6 text-2xl font-semibold tracking-wider text-black capitalize min-phone:text-center dark:text-darkTextWhiteColor">
						Marketplace
					</h5>
					<p className="mb-12 text-lg leading-7 tracking-wider text-justify dark:text-darkText font-oxygen">
						The e-commerce program is primarily designed for merchants, making
						it easy to manage their goods, customers and orders. This software
						is state-of-the-art and is designed to automate trading for trading
						agents. The list of goods, types, prices and the possibility of
						adding goods to the basket are created. In this section, it is
						convenient for trading agents to show, present and sell their goods
						to buyers. Trading agents can control the number of their customers,
						its location, phone number and the goods to be shipped to that
						customer through the software.
					</p>
					<Link to={routeConstants.contact.route}>
						<button
							type="button"
							className="px-8 py-3 font-bold text-black transition-all border-2 border-transparent border-solid cursor-pointer delay-400 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight rounded-3xl hover:bg-gradient-to-r hover:from-transparent hover:to-transparent dark:bg-[linear-gradient(266.08deg,#6366f1_1%,#6366f1_100%)] dark:border-darkFirstColor dark:text-darkTextWhiteColor dark:hover:border-darkFirstColor transition_animation hover:border-textColorOrange"
						>
							{routeConstants.contact.name}
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
