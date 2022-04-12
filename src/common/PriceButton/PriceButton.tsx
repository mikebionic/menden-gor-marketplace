import React from 'react';

interface IPriceButtonProps {
  width?: string;
  padding?: string;
  priceValue: number;
  currencySymbol?: string;
  coloredButton?: boolean;
  fontSize?: string;
}

export const PriceButton: React.FC<IPriceButtonProps> = ({
  width = 'w-28',
  padding = 'p-1',
  priceValue,
  currencySymbol,
  coloredButton = false,
  fontSize = 'text-base',
}: any) => {
  return (
    <>
      {coloredButton ? (
        <div className={`${width} ${padding} rounded-md cursor-default`}>
          <p
            className={`${fontSize} font-semibold text-center text-firstColorGradientFromDark dark:text-darkFirstColor`}
          >
            {priceValue} {currencySymbol ?? 'm'}
          </p>
        </div>
      ) : (
        <div
          className={`${width} ${padding} rounded-md cursor-default bg-fullwhite dark:bg-darkBgColor dark:shadow-none shadow-InnerCountryShadow`}
        >
          <p
            className={`${fontSize} font-semibold text-center text-firstColorGradientFromDark dark:text-darkFirstColor`}
          >
            {priceValue} {currencySymbol ?? 'm'}
          </p>
        </div>
      )}
    </>
  );
};
