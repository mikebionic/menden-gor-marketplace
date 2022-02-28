import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { CartRow } from 'components/Cart';
import {
  resourceAddedToCart,
  resourceRemovedFromCart,
  resourceAllRemovedFromCart,
} from 'sapredux/actions';
import { getTotalCount, getTotalPrice, getCartItems } from 'sapredux/selectors';

export const Cart = ({
  open,
  setOpen,
  items,
  totalCount,
  totalPrice,
  onIncrease,
  onDecrease,
  onDelete,
}: any) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-100"
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

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
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
                        to="/checkoutCart"
                        className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const mapStateToProps = (state: any) => {
  const totalData = getTotalCount(state);
  return {
    items: getCartItems(state),
    // totalPrice: getTotalPrice(state),
    totalCount: totalData.totalCount,
    totalPrice: totalData.totalPrice,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      onIncrease: resourceAddedToCart,
      onDecrease: resourceRemovedFromCart,
      onDelete: resourceAllRemovedFromCart,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
