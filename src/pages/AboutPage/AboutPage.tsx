import React from 'react';

import { routeConstants } from 'navigation/routeConstants';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full px-0 py-16">
      <div className="grid items-center justify-around w-full mx-auto my-8 grid-cols-about max-w-[95%]">
        <img
          className="h-auto col-start-1 col-end-2 mx-auto my-0 gap-x-2 w-96"
          src="https://cdn.pixabay.com/photo/2021/02/14/11/41/monkeys-6014204_1280.jpg"
          alt=""
        />
        <div className="w-auto px-8 py-0 mx-auto my-0 font-serif">
          <h1 className="mb-5 font-bold text-black capitalize text-7xl">
            About us
          </h1>
          <h5 className="mb-6 text-2xl font-semibold tracking-wider text-black capitalize">
            Marketplace
          </h5>
          <p className="mb-12 text-lg leading-7 tracking-wider text-justify">
            The e-commerce program is primarily designed for merchants, making
            it easy to manage their goods, customers and orders. This software
            is state-of-the-art and is designed to automate trading for trading
            agents. The list of goods, types, prices and the possibility of
            adding goods to the basket are created. In this section, it is
            convenient for trading agents to show, present and sell their goods
            to buyers. Trading agents can control the number of their customers,
            its location, phone number and the goods to be shipped to that
            customer through the software.
          </p>
          <Link to={routeConstants.contact.route}>
            <button
              type="button"
              className="px-8 py-3 font-bold text-black transition-all border-2 border-transparent border-solid cursor-pointer delay-400 bg-[#afa5d9] rounded-3xl hover:bg-transparent hover:border-[#afa5d9]"
            >
              {routeConstants.contact.name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
