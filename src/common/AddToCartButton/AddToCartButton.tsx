import { IconLabelButton } from 'common/IconLabelButton';
import { BiPlus } from 'react-icons/bi';

export const AddToCartButton = ({onIncrease}: any) => {
	
	const OnlyButton = () => (
    <IconLabelButton
      className="relative bottom-0 right-0 float-right mb-2 mr-2 bg-white border border-white rounded-md shadow-sm w-9 h-9"
      icon={<BiPlus className="w-full h-full mx-auto my-0 text-red-500" />}
      label=""
      onClick={onIncrease}
    />
	)

	return (
		<div>
			<OnlyButton />
		</div>
	)
}
