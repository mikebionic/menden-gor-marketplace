import React from 'react';

import { IconLabelButton } from 'common/IconLabelButton';
import { GrAppleAppStore } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';

const socialBarLinks = [
  {
    url: 'https://instagram.com/sapcozgut',
    icon: (
      <BsInstagram className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 hover:text-socialBarItemHover" />
    ),
    active: true,
  },
  {
    url: 'mailto:sapcozgut@gmail.com',
    icon: (
      <AiOutlineMail className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 hover:text-socialBarItemHover" />
    ),
    active: true,
  },
  {
    url: 'https://store.apple.com/sapcozgut',
    icon: (
      <GrAppleAppStore className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 border border-white border-solid rounded hover:text-socialBarItemHover hover:border-socialBarItemHover" />
    ),
    active: true,
  },
  {
    url: 'https://play.google.com/sapcozgut',
    icon: (
      <FaGooglePlay className="w-6 h-6 mx-auto my-1 text-white transition-all duration-300 hover:text-socialBarItemHover" />
    ),
    active: true,
  },
];

export const SocialBar: React.FC = () => {
  return (
    <div className="fixed left-0 grid w-8 grid-cols-1 grid-rows-SocialBar top-2/4 socialBarColor backdrop-blur-glass ">
      {
        socialBarLinks.map(({icon, url, active}:any, idx:number) =>
          active && 
          <a href={url} key={idx}>
            <IconLabelButton icon={icon} />
          </a>
        )
      }
    </div>
  );
};
