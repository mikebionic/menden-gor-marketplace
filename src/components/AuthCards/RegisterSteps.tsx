import { Steps } from 'antd'
import {
	UserOutlined,
	SolutionOutlined,
	FileTextOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const { Step } = Steps

export const RegisterSteps = ({ stage }: any) => {
	const { t } = useTranslation()
	return (
		<Steps>
			<Step
				status={stage === 1 ? 'process' : 'finish'}
				title={t('common.choose_method')}
				icon={
					<UserOutlined className="text-textColorOrange dark:text-darkFirstColor" />
				}
			/>
			<Step
				status={stage < 2 ? 'wait' : stage === 2 ? 'process' : 'finish'}
				title={t('common.verification')}
				icon={
					<SolutionOutlined className="text-textColorOrange dark:text-darkFirstColor" />
				}
			/>
			<Step
				status={stage < 3 ? 'wait' : stage === 3 ? 'process' : 'finish'}
				title={t('common.fill_the_blank')}
				icon={
					<FileTextOutlined className="text-textColorOrange dark:text-darkFirstColor" />
				}
			/>
		</Steps>
	)
}
