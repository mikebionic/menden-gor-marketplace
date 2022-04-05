import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { CartRow } from 'components/Cart';
import {
  resourceAddedToCart,
  resourceRemovedFromCart,
  resourceAllRemovedFromCart,
} from 'sapredux/actions';
import { getTotalCount, getCartItems } from 'sapredux/selectors';
import { ErrorBoundary } from 'modules/errors';
import { routeConstants } from 'navigation';

interface ICartProps {
  open?: any;
  setOpen?: any;
  items?: any;
  totalCount?: any;
  totalPrice?: any;
  onIncrease?: any;
  onDecrease?: any;
  onDelete?: any;
}

export const Cart: React.FC<ICartProps> = ({
  open,
  setOpen,
  items,
  totalCount,
  totalPrice,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <ErrorBoundary>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-[999]"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 md:w-[400px]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <BsX className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <hr className="mt-2" />

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {items.map((item: any, idx: number) => (
                              <li key={idx}>
                                <CartRow
                                  key={idx}
                                  item={item}
                                  onIncrease={onIncrease}
                                  onDecrease={onDecrease}
                                  onDelete={onDelete}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{totalPrice}</p>
                        <p>Count: {totalCount}</p>
                      </div>
                      <div className="mt-6">
                        <Link
                          to={routeConstants.checkout.route}
                          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark hover:bg-socialBarItemHover hover:text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => {
  const totalData = getTotalCount(state);
  return {
    items: getCartItems(state),
    totalCount: totalData.totalCount,
    totalPrice: totalData.totalPrice,
  };
};

const mapDispatchToProps = {
  onIncrease: resourceAddedToCart,
  onDecrease: resourceRemovedFromCart,
  onDelete: resourceAllRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
