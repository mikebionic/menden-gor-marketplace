import { BsInfoCircleFill } from 'react-icons/bs';

export const DangerAllert = () => {
  return (
    <div
      className="flex items-center justify-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
      role="alert"
    >
      <BsInfoCircleFill />
      <div>
        <span className="ml-3 font-medium">Danger alert!</span> Change a few
        things up and try submitting again.
      </div>
    </div>
  );
};
