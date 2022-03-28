import React from 'react';
import { connect } from 'react-redux';

import { getCartItems, getTotalCount } from 'sapredux/selectors';
import { CartRow } from 'components/Cart';
import { PaymentMethods } from 'components/Payment'
import { resourceAddedToCart, resourceAllRemovedFromCart, resourceRemovedFromCart } from 'sapredux/actions';
import { ErrorBoundary } from 'modules/errors';
import Input from 'rc-input';

interface ICheckoutPage {
  items?: any;
  totalCount?: any;
  totalPrice?: any;
  onIncrease?: any;
  onDecrease?: any;
  onDelete?: any;
}

const CheckoutPage: React.FC<ICheckoutPage> = (props:any) => {
  const {
    items,
    totalCount,
    totalPrice,
    onIncrease,
    onDecrease,
    onDelete,
  } = props
  return (
    <ErrorBoundary>
    <div className="grid grid-cols-[60%_40%] my-8">
      <div>
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
      <div className="grid w-full grid-flow-row gap-4 p-4 auto-rows-max shadow-defaultShadow bg-fullwhite ">
        <div className="grid grid-flow-col auto-cols-max place-content-between">
          <p className="text-base font-oxygen">Jemi</p>
          <p className="text-base font-semibold font-oxygen">{totalPrice} m</p>
        </div>

        <PaymentMethods />

        <p className="text-base font-semibold font-oxygen">Name:</p>
        <Input
          placeholder="Type your name"
          autoFocus
          type="text"
          name="name"
          // value=""
          onChange={()=>{}}
          inputMode="text"
          className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
        />
        <p className="text-base font-semibold font-oxygen">Phone number:</p>
        <Input
          placeholder="+993"
          type="number"
          name="phoneNumber"
          // value=""
          onChange={()=>{}}
          inputMode="text"
          className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
        />
        <p className="text-base font-semibold font-oxygen">Bellik:</p>
        <textarea
          className="font-oxygen border-[#E6E6E6] w-full rounded resize-none h-24"
          placeholder="Note: type your address or any additional information."
        />
        <button
          onClick={() => {}}
          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark hover:bg-socialBarItemHover hover:text-white"
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
    // totalPrice: getTotalPrice(state),
    totalCount: totalData.totalCount,
    totalPrice: totalData.totalPrice,
  };
};

const mapDispatchToProps = {
  onIncrease: resourceAddedToCart,
  onDecrease: resourceRemovedFromCart,
  onDelete: resourceAllRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);