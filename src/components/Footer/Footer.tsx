import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsArrowUpShort } from 'react-icons/bs';

import { IconLabelButton } from 'common/IconLabelButton';
import { routeConstants } from 'navigation/routeConstants';

export const Footer: React.FC = () => {
  return (
    <div className="relative">
      <div className="bottom-0 grid w-full h-56 grid-flow-col grid-rows-1 gap-4 pt-8 auto-cols-auto xl:px-32 md:px-24 shadow-Footer">
        <div className="mx-auto my-0">
          <Link to={routeConstants.about.route}>
            <h1 className="font-semibold xl:text-xl md:text-base">
              {routeConstants.about.name}
            </h1>
          </Link>
          <Link to={routeConstants.about.route}>
            <p>{routeConstants.about.name}</p>
          </Link>
          <p>Delivery and payment</p>
          <p>Order now!</p>
        </div>
        <div className="mx-auto my-0">
          <h1 className="font-semibold xl:text-xl md:text-base">Partnership</h1>
          <p>Collaboration</p>
          <p>Brands</p>
          <p>Vacancies</p>
        </div>
        <div className="mx-auto my-0">
          <h1 className="font-semibold xl:text-xl md:text-base">
            Our Services
          </h1>
          <p>Terms and conditions</p>
          <p>Conspiracy</p>
        </div>
        <div className="mx-auto my-0">
          <h1 className="font-semibold xl:text-xl md:text-base">Help</h1>
          <p>Help & support</p>
          <Link to={routeConstants.contact.route}>
            <p>{routeConstants.contact.name}</p>
          </Link>
        </div>
        <div className="mx-auto my-0">
          <Link to={routeConstants.contact.route}>
            <h1 className="font-semibold xl:text-xl md:text-base text-gradient">
              {routeConstants.contact.name}
            </h1>
          </Link>
          <a href="tel:+99364045600" className="hover:text-textColorOrange">
            <IconLabelButton
              className="flex items-center"
              icon={<BsFillTelephoneFill />}
              label="+99364045600"
            />
          </a>
          <a
            href="mailto:dowlpack@gmail.com"
            className="hover:text-textColorOrange"
          >
            <IconLabelButton
              className="flex items-center"
              icon={<MdOutlineAlternateEmail />}
              label="dowlpack@gmail.com"
            />
          </a>
          <a href="https://saphasap.com" className="hover:text-textColorOrange">
            <IconLabelButton
              className="flex items-center"
              icon={<AiOutlineGlobal />}
              label="www.saphasap.com"
            />
          </a>
        </div>
        <IconLabelButton
          className="absolute w-8 h-8 rounded bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight bottom-8 right-8"
          icon={
            <BsArrowUpShort className="w-full h-full text-white hover:bg-socialBarItemHover hover:rounded" />
          }
          label=""
        />
        <div className="absolute bottom-0 xl:w-[80%] md:w-[73%] col-start-1 col-end-6 text-center border-t-2">
          <a href="https://saphasap.com">
            <IconLabelButton
              className="py-3 text-gray-400 cursor-default"
              label="Made by Sapcozgut"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
