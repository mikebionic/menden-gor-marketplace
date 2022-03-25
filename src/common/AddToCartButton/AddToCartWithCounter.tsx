import React from 'react';
import { IconLabelButton } from 'common/IconLabelButton';
import { BiMinus, BiPlus } from 'react-icons/bi';

interface ICountryButton {
  coloredCountry?: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
  count: number;
  margin?: string;
}

export const AddToCartWithCounter: React.FC<ICountryButton> = ({
  onIncrease,
  onDecrease,
  count,
  coloredCountry = false,
  margin = 'mb-2 mr-2'
}) => {
  const OnlyButton = ({margin}:any) => (
    <IconLabelButton
      className={`relative bottom-0 right-0 float-right border border-white ${margin} rounded-md hover:shadow-sm bg-fullwhite w-9 h-9`}
      icon={<BiPlus className="w-full h-full mx-auto my-0 text-red-500" />}
      label=""
      onClick={onIncrease}
    />
  );
  const CountButtons = () => {
    return (
      <>
        {coloredCountry ? (
          <div className="grid items-center w-24 grid-cols-3 p-1 text-center border border-solid rounded-lg h-11 border-[#E2E1E1] bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight">
            <button onClick={onDecrease}>
              <BiMinus className="w-full h-full text-white hover:text-secondColorGradientToLight" />
            </button>
            <p className="inline-grid w-full h-full text-lg text-white navbarColor place-content-around">
              {count}
            </p>
            <button onClick={onIncrease}>
              <BiPlus className="w-full h-full text-white hover:text-secondColorGradientToLight" />
            </button>
          </div>
        ) : (
          <div className="grid items-center w-24 grid-cols-3 p-1 text-center border border-solid rounded-lg h-11 border-[#E2E1E1]">
            <button onClick={onDecrease}>
              <BiMinus className="w-full h-full text-firstColorGradientFromDark hover:text-secondColorGradientToLight" />
            </button>
            <p className="inline-grid w-full h-full text-lg shadow-InnerCountryShadow text-firstColorGradientFromDark bg-fullwhite place-content-around">
              {count}
            </p>
            <button onClick={onIncrease}>
              <BiPlus className="w-full h-full text-firstColorGradientFromDark hover:text-secondColorGradientToLight" />
            </button>
          </div>
        )}
      </>
    );
  };
  return <div>{count > 0 ? <CountButtons /> : <OnlyButton margin={margin} />}</div>;
};
