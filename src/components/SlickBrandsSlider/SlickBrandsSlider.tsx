import React from 'react';
import { connect } from 'react-redux';

import { getBrands } from 'sapredux/selectors';
import SlickSlider from 'common/SlickSlider';
import CircleBrands from 'common/CircleBrands';

const SlickBrandsSlider: React.FC = (props: any) => {
  const { brands } = props;

  return (
    <SlickSlider>
      {brands.map((item: any, idx: number) => (
        <CircleBrands {...item} key={idx} />
      ))}
    </SlickSlider>
  );
};

const mapStateToProps = (state: any) => ({
  brands: getBrands(state),
});

export default connect(mapStateToProps)(SlickBrandsSlider);
