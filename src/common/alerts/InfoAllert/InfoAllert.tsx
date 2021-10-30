import { BsInfoCircleFill } from 'react-icons/bs';

export const InfoAllert = () => {
  return (
    <div
      className="flex items-center justify-center p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg"
      role="alert"
    >
      <BsInfoCircleFill />
      <div>
        <span className="ml-3 font-medium">Info alert!</span> Change a few
        things up and try submitting again.
      </div>
    </div>
  );
};
