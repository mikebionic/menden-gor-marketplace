import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';
import { MdOutlineWebAsset } from 'react-icons/md';

export const ResGroup: React.FC = () => {
  return (
    <div className="grid mt-4 bg-white w-[380px] h-52 shadow-ResGroupShadow rounded-xl">
      <IconLabelButton
        icon={<MdOutlineWebAsset />}
        label="New Arrives"
        className="flex items-center grid-rows-1 ml-4 grid-cols-icon"
      />
      <div className="grid grid-cols-2 grid-rows-1 ml-2 ">
        <div className="rounded-md w-44 h-28 bg-[#FBFBFB]"></div>
        <div className="rounded-md w-44 h-28 bg-[#FBFBFB]"></div>
      </div>
    </div>
  );
};
