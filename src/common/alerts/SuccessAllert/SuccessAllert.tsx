import { BsInfoCircleFill } from 'react-icons/bs';

export const SuccessAllert = () => {
  return (
    <div
      className="flex items-center justify-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
      role="alert"
    >
      <BsInfoCircleFill />
      <div>
        <span className="ml-3 font-medium">Success alert!</span> Change a few
        things up and try submitting again.
      </div>
    </div>
  );
};
