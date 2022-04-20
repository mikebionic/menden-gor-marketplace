import { IconLabelButton } from 'common/IconLabelButton'
import { BiPlus } from 'react-icons/bi'
import { CheckOutlined } from '@ant-design/icons'

interface IAddToCartButtonProps {
	onIncrease?: any
	onDelete?: any
	count?: number
	margin?: string
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
	onIncrease,
	onDelete,
	count,
	margin = 'md:mb-2 md:mr-2 min-phone:mb-1 min-phone:mr-1',
}) => (
	<IconLabelButton
		className={`relative bottom-0 right-0 ${margin} float-right bg-fullwhite dark:bg-darkComponentColor border border-white dark:border-darkComponentColor min-phone:rounded-full md:rounded-md hover:shadow-sm transition_animation min-phone:w-8 md:w-9 min-phone:h-8 md:h-9`}
		icon={
			count ? (
				<CheckOutlined className="w-full h-full mx-auto my-0 text-2xl text-red-500 dark:text-darkFirstColor" />
			) : (
				<BiPlus className="w-full h-full mx-auto my-0 text-red-500 dark:text-darkFirstColor" />
			)
		}
		onClick={count ? onDelete : onIncrease}
	/>
)
