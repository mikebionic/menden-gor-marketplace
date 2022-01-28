import { IconLabelButton } from 'common/IconLabelButton';
import { BiPlus } from 'react-icons/bi';

export const AddToCartButton = ({ onIncrease, onDecrease, count }: any) => {
  const OnlyButton = () => (
    <IconLabelButton
      className="relative bottom-0 right-0 float-right mb-2 mr-2 bg-white border border-white rounded-md shadow-sm w-9 h-9"
      icon={<BiPlus className="w-full h-full mx-auto my-0 text-red-500" />}
      label=""
      onClick={onIncrease}
    />
  );
  const CountButtons = () => (
    <div className="flex row">
      <button
        onClick={onDecrease}
        className="bg-blue-200 rounded hover:bg-blue-700"
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={onIncrease}
        className="bg-blue-200 rounded hover:bg-blue-700"
      >
        +
      </button>
    </div>
  );
  return <div>{count > 0 ? <CountButtons /> : <OnlyButton />}</div>;
};
