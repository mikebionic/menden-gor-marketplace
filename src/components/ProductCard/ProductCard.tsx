import React from 'react';

import { Image } from 'common/Image'

export const ProductCard = ({data, onAddedToCart}: any) => {
  const { name, description, priceValue, currencyCode, image } = data
  return (
    <div className="relative group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Image
          src={image}
          alt={`${name} - ${description}`}
          className="object-cover object-center w-full h-full lg:w-full lg:h-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={window.location.href}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {priceValue} {currencyCode}
        </p>
      </div>
      <button
        onClick={onAddedToCart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to cart
      </button>
    </div>
  );
};
