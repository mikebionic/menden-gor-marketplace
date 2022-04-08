import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'common/Image';
import { Menu, Transition } from '@headlessui/react';

import dropdownItems from './dropdownItems';

const DropdownRow = (props: any) => {
  const { route, label, icon, design, color } = props;
  const thisStyle =
    design ??
    'hover:border-firstColorGradientFromDark hover:text-firstColorGradientFromDark dark:hover:border-darkFirstColor dark:hover:text-darkFirstColor';
  return (
    <li className="font-medium">
      <Link
        to={route}
        className={`flex items-center text-black dark:text-darkTextWhiteColor transition-colors duration-200 transform border-r-2 border-transparent ${thisStyle}`}
      >
        <div className={`mr-3 text-${color}`}>{icon}</div>
        {label}
      </Link>
    </li>
  );
};

interface IProfileCircleDropdown {
  loggedIn: boolean;
  username: string;
  image: string;
}

const ProfileCircleDropdown: React.FC<IProfileCircleDropdown> = ({
  loggedIn,
  username,
  image,
}) => {
  const userRows = dropdownItems.userRows.map((data: any, idx: number) => (
    <DropdownRow
      key={idx}
      route={data.route}
      label={data.label}
      color="green-600"
      icon={data.icon}
    />
  ));
  const unauthRows = dropdownItems.unauthRows.map((data: any, idx: number) => (
    <DropdownRow
      key={idx}
      route={data.route}
      label={data.label}
      color={data.color}
      design={data.design}
      icon={data.icon}
    />
  ));
  const authRows = dropdownItems.authRows.map((data: any, idx: number) => (
    <DropdownRow
      key={idx}
      route={data.route}
      label={data.label}
      color={data.color}
      design={data.design}
      icon={data.icon}
    />
  ));

  return (
    <Menu
      as="div"
      className="relative items-center justify-center inline-block w-full m-auto min-w-[4rem]"
    >
      <Menu.Button className="flex items-center justify-center space-x-3 cursor-pointer">
        <div className="w-12 h-12 overflow-hidden border-[1.2px] border-white rounded-full shadow-defaultShadow">
          <Image
            src={image}
            alt={username ?? 'avatar-icon'}
            className="object-cover w-full h-full"
            imageType="avatar"
          />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute px-5 py-3 mt-2 bg-white dark:bg-darkComponentColor dark:border-darkComponentColor border rounded-lg md:right-4 xl:left-0 shadow w-60 z-[999]">
          {loggedIn && (
            <>
              <p className="w-full py-1 text-base font-oxygen text-textColorOrange dark:text-darkFirstColor">
                {username}
              </p>
              <hr className="mb-2 border-gray-700 opacity-20" />
            </>
          )}
          <ul className="space-y-3 text-white">
            {loggedIn && userRows}
            {loggedIn && <hr className="border-gray-700 opacity-20" />}
            {loggedIn ? authRows : unauthRows}
          </ul>
        </div>
      </Transition>
    </Menu>
  );
};

export default ProfileCircleDropdown;
