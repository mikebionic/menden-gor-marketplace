import { IconLabelButton } from 'common/IconLabelButton';
import { BiPlus } from 'react-icons/bi';
import { CheckOutlined } from '@ant-design/icons';

interface IAddToCartButtonProps {
  onIncrease?: any;
  onDelete?: any;
  count?: number;
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  onIncrease,
  onDelete,
  count,
}) => (
  <IconLabelButton
    className="relative bottom-0 right-0 float-right mb-2 mr-2 bg-white border border-white rounded-md shadow-sm transition_animation w-9 h-9"
    icon={
      count ? (
        <CheckOutlined className="w-full h-full mx-auto my-0 text-2xl text-red-500" />
      ) : (
        <BiPlus className="w-full h-full mx-auto my-0 text-red-500" />
      )
    }
    onClick={count ? onDelete : onIncrease}
  />
);
