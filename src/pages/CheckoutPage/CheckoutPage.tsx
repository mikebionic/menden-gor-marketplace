import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from 'rc-input';
import {
  getCartItems,
  getCurrentUserInfo,
  getTotalCount,
} from 'sapredux/selectors';
import { sapswal } from 'sapredux/helpers';
import { CartRow } from 'components/Cart';
import { PaymentMethods } from 'components/Payment';
import { ErrorBoundary } from 'modules/errors';
import {
  resourceAddedToCart,
  resourceAllRemovedFromCart,
  resourceRemovedFromCart,
} from 'sapredux/actions';
import { toJsonCheckoutOrderInv } from 'sapredux/services/transform_data';
import { orderService } from 'sapredux/services';

interface ICheckoutPage {
  items?: any;
  totalCount?: any;
  totalPrice?: any;
  onIncrease?: any;
  onDecrease?: any;
  onDelete?: any;
  user?: any;
  loggedIn?: boolean;
}

const CheckoutPage: React.FC<ICheckoutPage> = (props: any) => {
  const {
    items,
    totalPrice,
    onIncrease,
    onDecrease,
    onDelete,
    user,
    loggedIn,
  } = props;

  const [inputs, setInputs] = useState({
    name: loggedIn ? `${user.username} - ${user.name}` : '',
    phoneNumber: loggedIn
      ? `${user.mobilePhoneNumber || user.homePhoneNumber}`
      : '',
    note: loggedIn ? `Address: ${user.address || ''}` : '',
    ptId: 1,
    pmId: 1,
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleKeyValueChange = (name: string = '', value: any = '') => {
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = () => {
    inputs.note.length < 1 ||
    inputs.name.length < 1 ||
    inputs.phoneNumber.length < 1
      ? sapswal.fire({
          text: 'Fill the required fields!',
          icon: 'error',
        })
      : orderService
          .checkoutSaleOrderInv([toJsonCheckoutOrderInv(inputs)])
          .then(
            (response: any) => handleResponse(response),
            (error: any) =>
              sapswal.fire({
                icon: 'error',
                text: `Failed to checkout order: ${error.toString()}`,
              }),
          );
    // : console.log(inputs)
  };
  const handleResponse = (response: any) => {
    console.log(response);
    sapswal.fire({
      icon: response.status === 1 ? 'success' : 'error',
      text: response.message,
    });
    if (response.status === 1) {
      console.log(
        'clear cart redux and move to orders page, or just move to main page timeout',
      );
    }
  };

  return (
    <ErrorBoundary>
      <div className="grid md:grid-flow-row gap-6 auto-rows-max xl:grid-cols-[60%_40%] my-8 2xl:my-28 3xl:my-40">
        <div>
          <ul role="list" className="-my-6 divide-y divide-gray-200">
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
        <div className="grid w-full grid-flow-row gap-4 p-4 auto-rows-max shadow-defaultShadow bg-fullwhite dark:bg-darkComponentColor">
          <div className="grid grid-flow-col auto-cols-max place-content-between">
            <p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
              Jemi
            </p>
            <p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
              {totalPrice} m
            </p>
          </div>

          <PaymentMethods
            id={inputs.pmId}
            onChange={(id: any) => handleKeyValueChange('pmId', id)}
          />

          <p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
            Name:
          </p>
          <Input
            placeholder="Type your name"
            autoFocus
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            inputMode="text"
            className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:bg-darkBgColor hover:border-textColorOrange dark:hover:border-darkFirstColor dark:border-darkBgColor"
          />
          <p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
            Phone number:
          </p>
          <Input
            placeholder="+993"
            type="number"
            name="phoneNumber"
            value={inputs.phoneNumber}
            onChange={handleChange}
            inputMode="text"
            className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:bg-darkBgColor hover:border-textColorOrange dark:hover:border-darkFirstColor dark:border-darkBgColor"
          />
          <p className="text-base font-semibold font-oxygen dark:text-darkTextWhiteColor">
            Bellik:
          </p>
          <textarea
            className="font-oxygen border-[#E6E6E6] w-full rounded resize-none h-24 dark:border-darkBgColor dark:bg-darkBgColor"
            placeholder="Note: type your address or any additional information."
            name="note"
            value={inputs.note}
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark dark:bg-darkFirstColor dark:hover:bg-darkFirstColor dark:hover:opacity-80 hover:bg-socialBarItemHover hover:text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => {
  const totalData = getTotalCount(state);
  return {
    items: getCartItems(state),
    totalPrice: totalData.totalPrice,
    user: getCurrentUserInfo(state.auth),
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = {
  onIncrease: resourceAddedToCart,
  onDecrease: resourceRemovedFromCart,
  onDelete: resourceAllRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
