import { Link } from 'react-router-dom'
import { SettingsList } from 'mobile/components/SettingsList'
import { routeConstants } from 'navigation'
import { RegisterRpAccCard } from 'components/AuthCards'

const MobileSettingsPage = () => {
	return (
		<>
			<div className="grid items-center justify-center grid-flow-col gap-4 text-center auto-cols-fr">
				<div className="row-span-3 p-4 m-auto rounded-full w-28 h-28 bg-fullwhite shadow-defaultShadow">
					<img src="" alt="" />
				</div>
				<Link
					to={routeConstants.login.route}
					className="inline-grid w-full h-8 col-span-2 mx-0 my-auto rounded-lg place-items-center bg-fullwhite shadow-defaultShadow"
				>
					Gir
				</Link>
				<Link
					to={routeConstants.register.route}
					className="inline-grid h-8 col-span-2 row-span-2 rounded-lg place-items-center dark:text-darkText bg-fullwhite shadow-defaultShadow"
				>
					Akkaunt doretmek
				</Link>
			</div>
			<SettingsList />
		</>
	)
}

export default MobileSettingsPage
