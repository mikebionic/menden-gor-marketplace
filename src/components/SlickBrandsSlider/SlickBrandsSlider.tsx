import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { Image } from 'common/Image';
import { getBrands } from 'sapredux/selectors';

const SlickBanner = ({ data }: any) => (
  <div className="flex flex-col items-center m-auto w-brands banner-container">
    <Image
      className="w-16 h-16 border border-solid border-borderBrands rounded-semifull transition_animation"
      src={data.icon}
      alt={data.name}
    />
    <span className="mt-2 text-sm text-center text-black transition_animation">
      {data.name}
    </span>
  </div>
);

const SlickBrandsSlider: React.FC = (props: any) => {
  const { brands } = props;
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <div className="cursor-pointer">
      <Slider {...settings}>
        {brands.map((item: any, idx: number) => (<SlickBanner data={item} key={idx} />))}
      </Slider>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  brands: getBrands(state),
});

export default connect(mapStateToProps)(SlickBrandsSlider);
