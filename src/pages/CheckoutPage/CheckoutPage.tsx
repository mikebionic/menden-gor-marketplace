import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'common/Image';

export const CheckoutPage: React.FC = () => {
  return (
    <div className="grid grid-cols-[60%_40%] my-8">
      <div>Table</div>
      <div className="grid w-full grid-flow-row gap-4 p-4 auto-rows-max shadow-defaultShadow bg-fullwhite ">
        <div className="grid grid-flow-col auto-cols-max place-content-between">
          <p className="text-base font-oxygen">Jemi</p>
          <p className="text-base font-semibold font-oxygen">0.00TMT</p>
        </div>
        {/* for mapping row */}
        <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <input
              className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange"
              type="radio"
            />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold">Nagt</h3>
          </div>
          <div className="col-span-2 row-span-2">
            Harydy alanynyzda nagt pul bilen hasaplashmak
          </div>
        </div>
        {/* For online payments banks */}
        {/* <div className="grid grid-flow-col gap-2 ml-10 auto-cols-auto place-items-center">
          <input
            className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange"
            type="radio"
          />
          <p className="ml-4 text-sm text-start font-oxygen">
            Halkbank - Türkmenistanyň paýdarlar täjirçilik banky
          </p>
          <Image src={''} className="w-24 h-24" />
        </div> */}
        <p className="text-base font-semibold font-oxygen">Bellik:</p>
        <textarea
          className="font-oxygen border-[#E6E6E6] w-full rounded resize-none h-24"
          placeholder="Type your remark..."
        />
        <Link
          to="/checkoutCart"
          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark hover:bg-socialBarItemHover hover:text-white"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
