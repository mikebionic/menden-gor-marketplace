import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SettingsList } from 'mobile/components/SettingsList'
import { routeConstants } from 'navigation'
import { Image } from 'common/Image'
import { ErrorBoundary } from 'modules/errors'
import { getCurrentUserInfo } from 'sapredux/selectors'

const MobileSettingsPage: React.FC = ({ current_user, loggedIn }: any) => {
	const { t } = useTranslation()
	return (
		<ErrorBoundary>
			<div className="grid items-center justify-center grid-flow-col gap-4 text-center auto-cols-fr">
				<div className="row-span-3 m-auto rounded-full w-28 h-28 bg-fullwhite shadow-defaultShadow">
					<Image
						src={current_user.image}
						alt={current_user.username || 'profile'}
						imageType="avatar"
						className="object-cover h-full rounded-full"
					/>
				</div>
				{loggedIn ? (
					<>
						<Link
							to={routeConstants.profileEdit.route}
							className="inline-grid w-full h-8 col-span-2 mx-0 my-auto rounded-lg place-items-center bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow"
						>
							<p className="text-black dark:text-darkTextWhiteColor">
								{t('common.profile_edit')}
							</p>
						</Link>
						<Link
							to={routeConstants.logout.route}
							className="inline-grid h-8 col-span-2 row-span-2 rounded-lg place-items-center dark:text-darkText bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow"
						>
							<p className="text-black dark:text-darkTextWhiteColor">
								{t('common.logout')}
							</p>
						</Link>
					</>
				) : (
					<>
						<Link
							to={routeConstants.login.route}
							className="inline-grid w-full h-8 col-span-2 mx-0 my-auto rounded-lg place-items-center bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow"
						>
							<p className="text-black dark:text-darkTextWhiteColor">
								{t('common.login')}
							</p>
						</Link>
						<Link
							to={routeConstants.register.route}
							className="inline-grid h-8 col-span-2 row-span-2 rounded-lg place-items-center dark:text-darkText bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow"
						>
							<p className="text-black dark:text-darkTextWhiteColor">
								{t('common.register')}
							</p>
						</Link>
					</>
				)}
			</div>
			<SettingsList />
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	current_user: getCurrentUserInfo(state.auth),
	loggedIn: state.auth.loggedIn,
})

export default connect(mapStateToProps)(MobileSettingsPage)
