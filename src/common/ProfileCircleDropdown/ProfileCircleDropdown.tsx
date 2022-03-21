import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'common/Image';

import { Menu, Transition } from '@headlessui/react';

import dropdownItems from './dropdownItems';

const DropdownRow = (props: any) => {
  const { route, label, icon, design, color } = props;
  const thisStyle =
    design ??
    'hover:border-firstColorGradientFromDark hover:text-firstColorGradientFromDark';
  return (
    <li className="font-medium">
      <Link
        to={route}
        className={`flex items-center text-black transition-colors duration-200 transform border-r-2 border-transparent ${thisStyle}`}
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
      className="relative items-center justify-center inline-block w-64 m-auto"
    >
      <Menu.Button className="flex items-center justify-center space-x-3 cursor-pointer">
        <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full ">
          <Image
            src={
              image ??
              'https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            }
            alt={username ?? 'avatar-icon'}
            className="object-cover w-full h-full"
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
        <div className="absolute px-5 py-3 mt-2 bg-white border rounded-lg shadow w-60 z-[999]">
          {loggedIn && <p>{username}</p>}
          <ul className="space-y-3 text-white">
            {loggedIn && userRows}
            {loggedIn && <hr className="border-gray-700" />}
            {loggedIn ? authRows : unauthRows}
          </ul>
        </div>
      </Transition>
    </Menu>
  );
};

export default ProfileCircleDropdown;
