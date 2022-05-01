import { useTranslation } from 'react-i18next'
import { Image } from 'common/Image'

const MobileSettingsPage = () => {
	const { t } = useTranslation()
	return (
		<div className="grid items-center justify-center grid-flow-col gap-4 text-center auto-cols-fr">
			<div className="row-span-3 p-4 m-auto rounded-full w-28 h-28 bg-fullwhite shadow-defaultShadow">
				<Image src="" alt="" imageType="avatar" />
			</div>
			<div className="inline-grid w-full h-8 col-span-2 mx-0 my-auto rounded-lg place-items-center bg-fullwhite shadow-defaultShadow">
				{t('common.login')}
			</div>
			<div className="inline-grid h-8 col-span-2 row-span-2 rounded-lg place-items-center dark:text-darkText bg-fullwhite shadow-defaultShadow">
				{t('common.register')}
			</div>
		</div>
	)
}

export default MobileSettingsPage
