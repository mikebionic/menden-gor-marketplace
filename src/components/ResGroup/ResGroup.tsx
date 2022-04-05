import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';
import { MdOutlineWebAsset } from 'react-icons/md';

export const ResGroup: React.FC = () => {
  return (
    <div className="grid mt-4 bg-white dark:bg-darkComponentColor w-[380px] h-52 shadow-defaultShadow rounded-xl">
      <IconLabelButton
        icon={
          <MdOutlineWebAsset className="text-black dark:text-darkTextWhiteColor" />
        }
        label="New Arrives"
        className="flex items-center grid-rows-1 ml-4 grid-cols-icon dark:text-darkTextWhiteColor"
      />
      <div className="grid grid-cols-2 grid-rows-1 ml-2 ">
        <div className="rounded-md w-44 h-28 bg-[#FBFBFB] dark:bg-darkBgColor"></div>
        <div className="rounded-md w-44 h-28 bg-[#FBFBFB] dark:bg-darkBgColor"></div>
      </div>
    </div>
  );
};
