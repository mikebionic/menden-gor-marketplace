import React from 'react';
import Slider from 'react-slick';

const SlickBanner = ({ data }: any) => {
  console.log('HELLOLODLODLSAODLSODAOSK', data, data.icon, data.name);
  return data.map(() => {
    <div className="flex flex-col items-center">
      <img
        className="border border-solid border-[#e6e6e6] rounded-semifull w-16 h-16 transition_animation"
        src={data.icon}
      />
      <span className="mt-2 text-sm text-center text-black transition_animation hover:text-gradientFirstColor">
        {data.name}
      </span>
    </div>;
  });
};

export const SlickBrandsSlider: React.FC = () => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <div className="cursor-pointer">
      <Slider {...settings}>{SlickBanner}</Slider>
    </div>
  );
};
