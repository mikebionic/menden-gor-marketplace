import React from 'react';

interface IPriceButtonProps {
  width?: string;
  padding?: string;
  priceValue: number;
}

export const PriceButton: React.FC<IPriceButtonProps> = ({
  width = 'w-24',
  padding = 'p-1',
  priceValue,
}: any) => {
  return (
    <div
      className={`${width} ${padding} rounded-md cursor-default bg-fullwhite shadow-InnerCountryShadow`}
    >
      <p className="text-base font-semibold text-center text-gradientFirstColor">
        {priceValue} m
      </p>
    </div>
  );
};
