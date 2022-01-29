/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { MdSort } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { BsWallet2 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

import { Cart, CartButton } from 'components/Cart';
import { ErrorBoundary } from 'modules/errors';
import { navigation } from './NavbarLinks';
import { routeConstants } from 'navigation/routeConstants';
import { Search } from 'components/Search';
import { IconLabelButton } from 'common/IconLabelButton';

const mobileResponsive = {
  mobileView: 'fixed bottom-0 z-100 w-full bg-white',
  desktopView: 'fixed z-100 min-w-screen bg-white',
};

const classes =
  window.innerWidth < 768
    ? mobileResponsive.mobileView
    : mobileResponsive.desktopView;

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

export const Navbar = (props: any) => {
  const categories = props.categories;

  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="fixed w-full z-1">
        <header className="top-0 left-0 grid w-full h-20 grid-rows-1 navbarColor">
          {/* first row */}
          <div className="inline-grid items-center w-full grid-rows-1 mx-auto my-2 grid-cols-firstRowNavbar">
            <div className="w-24 h-5 mx-auto my-0">
              <Link to={routeConstants.root.route}>
                <img
                  src="https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png"
                  alt="logo"
                />
              </Link>
            </div>
            <Search />
            <Link to={routeConstants.login.route}>
              <IconLabelButton
                className="inline-grid items-center grid-rows-1 mx-16 text-lg font-medium text-white grid-cols-icon"
                icon={<BiLogIn />}
                label="Login"
              />
            </Link>
            <Link to={routeConstants.register.route}>
              <IconLabelButton
                className="inline-grid items-center grid-rows-1 mx-16 text-lg font-medium text-white grid-cols-icon"
                icon={<FiUserPlus />}
                label="Register"
              />
            </Link>
          </div>
        </header>
        <header className="top-0 left-0 w-full h-12 border-b border-white shadow-md navbarColor">
          {/* second row */}
          <div className="w-full border-t border-white">
            <div className="absolute float-left border-r border-white h-46">
              <IconLabelButton
                className="inline-grid items-center grid-rows-1 px-0 py-2 mx-16 text-lg font-medium text-white grid-cols-icon"
                icon={<MdSort className="text-2xl" />}
                label="Categories"
              />
            </div>
            <div className="grid float-right grid-rows-1 mr-4 grid-cols-navIcons">
              <IconLabelButton
                className="items-center grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid h-1/3 "
                icon={<BsMoon className="w-6 h-6 mx-3 text-2xl" />}
                label=""
              />
              <Link to={''} className="flex flex-row-reverse mr-1">
                <IconLabelButton
                  className="items-center grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid h-1/3"
                  icon={
                    <MdLanguage className="w-6 h-6 mx-3 text-2xl text-white" />
                  }
                />
                <span className="absolute font-semibold text-white text-10 ">
                  TKM
                </span>
              </Link>
              <IconLabelButton
                className="items-center grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid h-1/3 "
                icon={
                  <BsWallet2 className="w-6 h-6 mx-3 text-2xl text-white" />
                }
                label=""
              />
              <IconLabelButton
                className="items-center grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid h-1/3 "
                icon={
                  <FaRegHeart className="w-6 h-6 mx-3 text-2xl text-white" />
                }
                label=""
              />

              <CartButton 
                cartOpen={cartOpen}
                setCartOpen={setCartOpen} />
              
            </div>
          </div>
        </header>
      </div>
    </ErrorBoundary>
  );
};
