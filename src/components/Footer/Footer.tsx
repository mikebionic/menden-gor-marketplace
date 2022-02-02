import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsArrowUpShort } from 'react-icons/bs';

export const Footer: React.FC = () => {
  return (
    <div className="grid w-full h-56 grid-cols-5 grid-rows-2 gap-4 px-32 pt-8 shadow-Footer">
      <div className="mx-auto my-0">
        <h1>About us</h1>
        <p>About us</p>
        <p>Bla bla</p>
        <p>bla sadaslkd</p>
      </div>
      <div className="mx-auto my-0">
        <h1>Contact us</h1>
        <p>Contact us</p>
        <p>Bla bla</p>
      </div>
      <div className="mx-auto my-0">
        <h1>Our Services</h1>
        <p>Contact us</p>
        <p>Bla bla</p>
      </div>
      <div className="mx-auto my-0">
        <h1>Help</h1>
        <p>Contact us</p>
        <p>Bla bla</p>
        <p>Bla bla</p>
      </div>
      <div className="mx-auto my-0">
        <h1 className="text-gradient">Contact us</h1>
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
      <div className="col-start-1 col-end-6 mx-auto my-0">HELLO</div>
    </div>
  );
};
