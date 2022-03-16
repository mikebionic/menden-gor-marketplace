import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi'
import { Menu, Transition } from '@headlessui/react';

import userItems from './userItems';

import { BiLogIn } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { routeConstants } from 'navigation/routeConstants';

const UserAvatar: React.FC = () => {
  const avatarList = userItems.map((data: any) => (
    <li className="font-medium">
      <Link
        to={data.link}
        className="flex items-center text-black transition-colors duration-200 transform border-r-2 border-transparent hover:border-gradientFirstColor hover:text-gradientFirstColor"
      >
        <div className="mr-3">{data.icon}</div>
        {data.label}
      </Link>
    </li>
  ));

  return (
    <Menu
      as="div"
      className="relative items-center justify-center inline-block w-64 m-auto"
    >
      <Menu.Button className="flex items-center justify-center space-x-3 cursor-pointer">
        <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full ">
          <img
            src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
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
        <div className="absolute px-5 py-3 mt-2 bg-white border rounded-lg shadow w-60">
          <ul className="space-y-3 text-white">
            {avatarList}
            <hr className="border-gray-700" />
            <li className="font-medium">
              <Link
                to={routeConstants.logout.route}
                className="flex items-center text-black transition-colors duration-200 transform border-r-2 border-transparent hover:border-red-600 hover:text-red-600"
              >
                <div className="mr-3 text-red-600">
                  <FiLogOut className="text-xl" />
                </div>
                {routeConstants.logout.name}
              </Link>
            </li>

            <li className="font-medium">
              <Link
                to={routeConstants.login.route}
                className="flex items-center text-black transition-colors duration-200 transform border-r-2 border-transparent hover:border-red-600 hover:text-red-600"
              >
                <div className="mr-3 text-green-600">
                  <BiLogIn className="text-xl" />
                </div>
                {routeConstants.login.name}
              </Link>
            </li>
            <li className="font-medium">
              <Link
                to={routeConstants.register.route}
                className="flex items-center text-black transition-colors duration-200 transform border-r-2 border-transparent hover:border-red-600 hover:text-red-600"
              >
                <div className="mr-3 text-green-600">
                  <FiUserPlus className="text-xl" />
                </div>
                {routeConstants.register.name}
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </Menu>
  );
};

export default UserAvatar