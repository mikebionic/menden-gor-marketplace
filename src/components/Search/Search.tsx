import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

export const Search: React.FC = () => {
  return (
    <div className="grid grid-rows-1 mx-auto my-0 w-search grid-cols-search">
      {/* dropdown products */}
      <div className="w-32 h-12 rotate-180 bg-white border-2 border-white border-solid rounded-l-full cursor-pointer productColor gap-x-8">
        <IconLabelButton
          className="flex flex-row-reverse items-center w-20 h-4 pl-1 mx-auto my-3 text-sm text-center text-white"
          icon={<IoIosArrowDown className="" />}
          label="Products"
        />
      </div>
      <div className="w-full h-12 bg-white">
        <input
          type="text"
          className="w-full h-full text-sm border-0 border-white outline-none placeholder-c8 ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
          placeholder="What are you looking for..."
        />
      </div>
      <div className="w-32 h-12 rotate-180 bg-white border-2 border-white border-solid rounded-r-full cursor-pointer productColor gap-x-8">
        <IconLabelButton
          className="flex items-center w-20 h-4 pl-1 mx-auto my-3 text-sm text-center text-white"
          icon={<AiOutlineSearch />}
          label="Search"
        />
      </div>
    </div>
  );
};
