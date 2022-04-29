import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { routeConstants } from 'navigation'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { BiCategory } from 'react-icons/bi'

import './style.css'
import { link } from 'fs'

const list = document.querySelectorAll('.list')
function activeLink(this: any) {
	list.forEach((item) => item.classList.remove('active'))
	this.classList.add('active')
}
list.forEach((item) => item.addEventListener('click', activeLink))

export const MobileBottomNavigation: React.FC = () => {
	const navigationLinks = [
		{
			name: 'Home',
			route: routeConstants.root.route,
			icon: <IoHomeOutline className="w-7 h-7" />,
		},
		{
			name: 'Categories',
			route: routeConstants.categories.route,
			icon: <BiCategory className="w-7 h-7" />,
		},
		{
			name: 'Cart',
			route: routeConstants.cart.route,
			icon: <RiShoppingBasketLine className="w-7 h-7" />,
		},
		{
			name: 'Wishlist',
			route: routeConstants.wishlist.route,
			icon: <AiOutlineHeart className="w-7 h-7" />,
		},
		{
			name: 'Settings',
			route: routeConstants.settings.route,
			icon: <FiSettings className="w-7 h-7" />,
		},
	]
	const routesList = [
		routeConstants.root.route,
		routeConstants.categories.route,
		routeConstants.cart.route,
		routeConstants.wishlist.route,
		routeConstants.settings.route,
	]

	let location = useLocation()
	return (
		<div className="navigation">
			<ul>
				{navigationLinks.map(({ name, route, icon }: any, idx: number) => (
					<li
						className={`list ${location.pathname === route ? 'active' : ''}`}
						key={idx}
					>
						<Link to={route}>
							<span className="icon">{icon}</span>
							<span className="text">{name}</span>
						</Link>
					</li>
				))}

				{routesList.map((route: string) => {
					if (route === location.pathname) {
						return <div className="indicator"></div>
					}
				})}
			</ul>
		</div>
	)
}
