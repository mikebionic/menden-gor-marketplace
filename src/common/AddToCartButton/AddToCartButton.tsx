import { IconLabelButton } from 'common/IconLabelButton';
import { BiPlus } from 'react-icons/bi';
import { CheckOutlined } from '@ant-design/icons';

interface IAddToCartButtonProps {
  onIncrease?: any;
  onDelete?: any;
  count?: number;
  margin?: string;
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  onIncrease,
  onDelete,
  count,
  margin = 'mb-2 mr-2',
}) => (
  <IconLabelButton
    className={`relative bottom-0 right-0 ${margin} float-right bg-fullwhite dark:bg-darkComponentColor border border-white dark:border-darkComponentColor rounded-md hover:shadow-sm transition_animation w-9 h-9`}
    icon={
      count ? (
        <CheckOutlined className="w-full h-full mx-auto my-0 text-2xl text-red-500 dark:text-darkFirstColor" />
      ) : (
        <BiPlus className="w-full h-full mx-auto my-0 text-red-500 dark:text-darkFirstColor" />
      )
    }
    onClick={count ? onDelete : onIncrease}
  />
);
