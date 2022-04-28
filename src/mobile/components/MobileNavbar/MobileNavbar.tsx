import React from 'react'

import { MobileSearch } from 'mobile/components/MobileSearch'
import { routeConstants } from 'navigation'
import { Link } from 'react-router-dom'
import logo_white from 'common/images/logo_white.svg'

export const MobileNavbar: React.FC = () => {
	return (
		<header className="grid gap-4 grid-cols-[max-content_1fr] px-3 place-content-around items-center fixed w-full h-20 shadow-[0px_4px_8px_rgba(0,0,0,0.2)] bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight z-[9999]">
			<div className="w-20 mx-auto my-0">
				<Link to={routeConstants.root.route}>
					<img src={logo_white} alt="logo" />
				</Link>
			</div>
			<MobileSearch />
		</header>
	)
}
