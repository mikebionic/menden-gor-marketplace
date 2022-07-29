import { useTranslation } from 'react-i18next'

export const CategoryList = (props: any) => {
	const { t } = useTranslation()
	return (
		<div>
			<div className="pl-3">
				<h1 className="py-2 mb-2 text-base font-semibold text-black border-b border-gray-200 dark:border-darkTextWhiteColor dark:text-darkTextWhiteColor">
					{t('common.categories')}
				</h1>
			</div>
			<div className="pl-1 h-[400px] xl:h-full max-h-[80%] relative">
				{props.children}
			</div>
		</div>
	)
}
