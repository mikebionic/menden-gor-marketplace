import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';
import { GrAppleAppStore } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';

export const SocialBar: React.FC = () => {
  return (
    <div className="fixed left-0 grid w-8 grid-cols-1 grid-rows-SocialBar top-2/3 socialBarColor backdrop-blur-glass ">
      <IconLabelButton
        className=""
        icon={
          <BsInstagram className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 hover:text-socialBarItemHover" />
        }
      />
      <IconLabelButton
        className=""
        icon={
          <AiOutlineMail className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 hover:text-socialBarItemHover" />
        }
      />
      <IconLabelButton
        className=""
        icon={
          <GrAppleAppStore className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 border border-white border-solid rounded hover:text-socialBarItemHover hover:border-socialBarItemHover" />
        }
      />
      <IconLabelButton
        className=""
        icon={
          <FaGooglePlay className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 hover:text-socialBarItemHover" />
        }
      />
    </div>
  );
};
