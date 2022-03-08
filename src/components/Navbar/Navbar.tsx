import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight, MdSort } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import { BsWallet2 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

import { Cart, CartButton } from 'components/Cart';
import { ErrorBoundary } from 'modules/errors';
import { routeConstants } from 'navigation/routeConstants';
import { Search } from 'components/Search';
import { IconLabelButton } from 'common/IconLabelButton';
import LangButton from 'components/LangButton';
import { CategoryList } from 'common/CategoryList';
import { CategoryListItem } from 'common/CategoryListItem';
import { Transition } from '@headlessui/react';
import { DropdownMenu } from 'common/DropdownMenu';
import { ChevronDownIcon } from '@heroicons/react/solid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const mobileResponsive = {
  mobileView: 'fixed bottom-0 z-100 w-full bg-white',
  desktopView: 'fixed z-100 min-w-screen bg-white',
};

const classes =
  window.innerWidth < 768
    ? mobileResponsive.mobileView
    : mobileResponsive.desktopView;

const currencyItems = [
  {
    name: 'TMT',
  },
  {
    name: 'USD',
  },
];

export const Navbar = (props: any) => {
  const { categories } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const [dropdownState, onDropdownStateChange] = useState(false);
  const [categoryDropdownState, onCategoryDropdownStateChange] =
    useState(false);

  const handleClickAway = () => {
    onCategoryDropdownStateChange(false);
  };

  // const filtered_currency = currencyItems.map((data: any) => {
  //   if (data !== currentCurrency) {
  //     return <LanguageItem icon={data.icon} key={data.name} data={data} />;
  //   }
  // });

  const CategoryItem = () => {
    return (
      <div className="absolute grid w-full p-2 overflow-x-hidden overflow-y-auto shadow-lg h-80 mt-2px left-12 bg-fullwhite">
        {categories.map((category: any, idx: number) => (
          <Link to={`${routeConstants.vGrid.route}?category=${category.id}`}>
            <CategoryListItem key={idx} {...category} />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div className="fixed w-full z-navbar">
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
        <header className="top-0 left-0 w-full h-12 border-b border-white shadow-md navbarColor relarive">
          {/* second row */}
          <div className="w-full border-t border-white">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="absolute float-left border-r border-white h-46">
                <IconLabelButton
                  className="inline-grid items-center grid-rows-1 px-0 py-2 mx-16 text-lg font-medium text-white grid-cols-icon"
                  icon={<MdSort className="text-2xl" />}
                  label="Categories"
                  onClick={() =>
                    onCategoryDropdownStateChange(
                      (categoryDropdownState) => !categoryDropdownState,
                    )
                  }
                />

                <Transition
                  show={categoryDropdownState}
                  enter="transition ease-out duration-300"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-300"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {categoryDropdownState ? <CategoryItem /> : null}
                </Transition>
              </div>
            </ClickAwayListener>
            <div className="relative grid float-right grid-rows-1 gap-2 mr-4 grid-cols-navIcons">
              <div>
                <IconLabelButton
                  className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid "
                  icon={<BsMoon className="w-6 h-6 mx-3 text-2xl" />}
                  label=""
                />
              </div>
              <div>
                <LangButton
                  className="absolute"
                  onDropdownStateChange={onDropdownStateChange}
                  dropdownState={dropdownState}
                />
              </div>
              <div className="relative grid">
                <div>
                  <DropdownMenu
                    items={currencyItems}
                    menuButtonLabel="Options"
                    menuButtonIcon={
                      <ChevronDownIcon className="w-full h-full" />
                    }
                    className="w-20"
                    activeClassName="hover:bg-gray-100 text-white"
                    menuButton={
                      <>
                        <IconLabelButton
                          className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid"
                          icon={
                            <BsWallet2 className="w-6 h-6 mx-3 text-2xl text-white" />
                          }
                        />
                        <span className="absolute top-0 font-semibold text-white left-70 text-10">
                          TMT
                        </span>
                      </>
                    }
                  />
                </div>
              </div>
              <Link to={`${routeConstants.wishlist.route}`}>
                <IconLabelButton
                  className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid"
                  icon={
                    <FaRegHeart className="w-6 h-6 mx-3 text-2xl text-white" />
                  }
                />
              </Link>
              <ErrorBoundary>
                <CartButton cartOpen={cartOpen} setCartOpen={setCartOpen} />
              </ErrorBoundary>
              <ErrorBoundary>
                <Cart open={cartOpen} setOpen={setCartOpen} />
              </ErrorBoundary>
            </div>
          </div>
        </header>
      </div>
    </ErrorBoundary>
  );
};
