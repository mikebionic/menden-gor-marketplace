import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsArrowUpShort } from 'react-icons/bs';

export const Footer: React.FC = () => {
  return (
    <div className="relative grid w-full h-56 grid-cols-5 grid-rows-2 gap-4 px-32 pt-8 shadow-Footer">
      <div className="mx-auto my-0">
        <h1 className="text-xl font-semibold">About us</h1>
        <p>About us</p>
        <p>Bla bla</p>
        <p>bla sadaslkd</p>
      </div>
      <div className="mx-auto my-0">
        <h1 className="text-xl font-semibold">Contact us</h1>
        <p>Contact us</p>
        <p>Bla bla</p>
      </div>
      <div className="mx-auto my-0">
        <h1 className="text-xl font-semibold">Our Services</h1>
        <p>Contact us</p>
        <p>Bla bla</p>
      </div>
      <div className="mx-auto my-0">
        <h1 className="text-xl font-semibold">Help</h1>
        <p>Contact us</p>
        <p>Bla bla</p>
        <p>Bla bla</p>
      </div>
      <div className="mx-auto my-0">
        <h1 className="text-xl font-semibold text-gradient">Contact us</h1>
        <IconLabelButton
          className="flex items-center"
          icon={<BsFillTelephoneFill />}
          label="+99365000000"
        />
        <IconLabelButton
          className="flex items-center"
          icon={<MdOutlineAlternateEmail />}
          label="dowlpack@gmail.com"
        />
        <IconLabelButton
          className="flex items-center"
          icon={<AiOutlineGlobal />}
          label="www.saphasap.com"
        />
      </div>
      <IconLabelButton
        className="absolute w-8 h-8 rounded navbarColor bottom-8 right-8"
        icon={
          <BsArrowUpShort className="w-full h-full text-white hover:bg-socialBarItemHover hover:rounded" />
        }
        label=""
      />
      <div className="absolute bottom-0 w-full col-start-1 col-end-6 text-center border-t-2">
        <IconLabelButton
          className="py-3 text-gray-400 cursor-default"
          label="Made by Sapcozgut"
        />
      </div>
    </div>
  );
};
