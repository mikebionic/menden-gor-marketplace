import React from 'react';

interface IPriceButtonProps {
  width?: string;
  padding?: string;
  priceValue: number;
  currencyCode?: string;
  coloredButton?: boolean;
}

export const PriceButton: React.FC<IPriceButtonProps> = ({
  width = 'w-28',
  padding = 'p-1',
  priceValue,
  currencyCode,
  coloredButton = false,
}: any) => {
  return (
    <>
      {coloredButton ? (
        <div className={`${width} ${padding} rounded-md cursor-default`}>
          <p className="text-base font-semibold text-center text-gradientFirstColor">
            {priceValue} {currencyCode ?? 'm'}
          </p>
        </div>
      ) : (
        <div
          className={`${width} ${padding} rounded-md cursor-default bg-fullwhite shadow-InnerCountryShadow`}
        >
          <p className="text-base font-semibold text-center text-gradientFirstColor">
            {priceValue} {currencyCode ?? 'm'}
          </p>
        </div>
      )}
    </>
  );
};
