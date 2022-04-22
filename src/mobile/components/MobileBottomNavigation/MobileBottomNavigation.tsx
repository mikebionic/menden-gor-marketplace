import React from 'react'

import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'

import './style.css'
import { Link } from 'react-router-dom'

const list = document.querySelectorAll('.list')
function activeLink(this: any) {
	list.forEach((item) => item.classList.remove('active'))
	this.classList.add('active')
}
list.forEach((item) => item.addEventListener('click', activeLink))

export const MobileBottomNavigation: React.FC = () => {
	return (
		<div className="navigation">
			<ul>
				<li className="list">
					<Link to={window.location.pathname}>
						<span className="icon">
							<IoHomeOutline className="w-7 h-7" />
						</span>
						<span className="text">Home</span>
					</Link>
				</li>
				<li className="list">
					<Link to={window.location.pathname}>
						<span className="icon">
							<AiOutlineUser className="w-7 h-7" />
						</span>
						<span className="text">Categories</span>
					</Link>
				</li>
				<li className="list active">
					<Link to={window.location.pathname}>
						<span className="icon">
							<BiMessageDetail className="w-7 h-7" />
						</span>
						<span className="text">Cart</span>
					</Link>
				</li>
				<li className="list">
					<Link to={window.location.pathname}>
						<span className="icon">
							<MdOutlinePhotoSizeSelectActual className="w-7 h-7" />
						</span>
						<span className="text">Wishlist</span>
					</Link>
				</li>
				<li className="list">
					<Link to={window.location.pathname}>
						<span className="icon">
							<FiSettings className="w-7 h-7" />
						</span>
						<span className="text">Settings</span>
					</Link>
				</li>
				<div className="indicator"></div>
			</ul>
		</div>
	)
}
