import React from 'react'
import { Tabs } from 'antd'
import { ProductDesc, ProductReview } from 'components/ProductInfoTabs'
import { useTranslation } from 'react-i18next'

const { TabPane } = Tabs

export const ProductInfoTabs: React.FC = (props: any) => {
	const { t } = useTranslation()
	return (
		<Tabs defaultActiveKey="1" animated={true} centered className="my-8">
			<TabPane tab={t('common.description')} key="1">
				<ProductDesc {...props} />
			</TabPane>
			<TabPane tab={t('common.reviews')} key="2">
				<ProductReview resId={props.id} reviews={props.reviews} />
			</TabPane>
		</Tabs>
	)
}
