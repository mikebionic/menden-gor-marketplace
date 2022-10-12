import React from 'react'
import { useTranslation } from 'react-i18next'

import { ErrorBoundary } from 'modules/errors'

interface IProductDesc {
	fullDescription?: string
}

export const ProductDesc: React.FC<IProductDesc> = ({ fullDescription }) => {
	const { t } = useTranslation()
	return (
		<ErrorBoundary>
			<div className="px-3 py-6">
				<p
					className="text-base text-justify font-oxygen text-textLightGray dark:text-darkText"
					dangerouslySetInnerHTML={{
						__html: fullDescription ?? t('common.full_description_empty'),
					}}
				/>
			</div>
		</ErrorBoundary>
	)
}
