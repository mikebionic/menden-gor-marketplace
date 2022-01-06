/* eslint-disable jsx-a11y/no-redundant-roles */
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  XIcon,
} from '@heroicons/react/outline';

import { Cart, CartButton } from 'components/Cart';
import { ErrorBoundary } from 'modules/errors';
import { navigation } from './NavbarLinks';

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
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex lg:hidden z-1"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="flex px-4 -mb-px space-x-8">
                      {navigation.categories.map((category, idx) => (
                        <Tab
                          key={`${category.name}${idx}`}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 pt-10 pb-8 space-y-10"
                      >
                        {category.sections.map((section, idx) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>

                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="flex flex-col mt-6 space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="block p-2 -m-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.route}
                        className="block p-2 -m-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {navigation.registration.map((registration) => (
                    <div key={registration.name} className="flow-root">
                      <a
                        href={registration.route}
                        className="block p-2 -m-2 font-medium text-gray-900"
                      >
                        {registration.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ${classes}`}
          >
            <div className="border-b border-gray-200">
              <div className="flex items-center h-16">
                <button
                  type="button"
                  className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="flex ml-4 lg:ml-0">
                  <a href={window.location.href}>
                    <span className="sr-only">Workflow</span>
                    <img className="w-auto h-8" src="" alt="" />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.route}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 bg-white shadow top-1/2"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white ">
                                  <div className="px-8 mx-auto max-w-7xl">
                                    <div className="grid grid-cols-2 py-16 gap-y-10 gap-x-8">
                                      <div className="grid grid-cols-3 row-start-1 text-sm gap-y-10 gap-x-8">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-medium text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <a
                                                    href={item.href}
                                                    className="hover:text-gray-800"
                                                  >
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                  </div>
                </Popover.Group>

                <div className="flex items-center ml-auto cursor-pointer">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {navigation.registration.map((registration) => (
                      <>
                        <a
                          href={registration.route}
                          className="text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {registration.name}
                        </a>
                        <span
                          className={registration.className}
                          aria-hidden="true"
                        />
                      </>
                    ))}
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a
                      href={window.location.href}
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="flow-root ml-4 lg:ml-6">
                    <CartButton 
                      cartOpen={cartOpen}
                      setCartOpen={setCartOpen} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Cart open={cartOpen} setOpen={setCartOpen} />
    </ErrorBoundary>
  );
};
