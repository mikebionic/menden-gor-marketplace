import { Link } from 'react-router-dom'
import { SettingsList } from 'mobile/components/SettingsList'
import { routeConstants } from 'navigation'
import { useTranslation } from 'react-i18next'
import { Image } from 'common/Image'

const MobileSettingsPage = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className="grid items-center justify-center grid-flow-col gap-4 text-center auto-cols-fr">
				<div className="row-span-3 m-auto rounded-full w-28 h-28 bg-fullwhite shadow-defaultShadow">
					<Image src="" alt="" imageType="avatar" className="rounded-full" />
				</div>
				<Link
					to={routeConstants.login.route}
					className="inline-grid w-full h-8 col-span-2 mx-0 my-auto rounded-lg place-items-center bg-fullwhite shadow-defaultShadow"
				>
					{t('common.login')}
				</Link>
				<Link
					to={routeConstants.register.route}
					className="inline-grid h-8 col-span-2 row-span-2 rounded-lg place-items-center dark:text-darkText bg-fullwhite shadow-defaultShadow"
				>
					{t('common.register')}
				</Link>
			</div>
			<SettingsList />
		</>
	)
}

export default MobileSettingsPage
