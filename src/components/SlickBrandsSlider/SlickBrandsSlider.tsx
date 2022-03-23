import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBrands } from 'sapredux/selectors';
import SlickSlider from 'common/SlickSlider';
import CircleBrands from 'common/CircleBrands';
import { routeConstants } from 'navigation/routeConstants';

const SlickBrandsSlider: React.FC = (props: any) => {
  const { brands } = props;

  const slidesToShow = brands.length < 5 ? brands.length : 5
  return (
    <SlickSlider settings={{slidesToShow: slidesToShow}}>
      {brands.map((item: any, idx: number) => (
        <Link to={`${routeConstants.vGrid.route}?brand=${item.id}&`} key={idx} >
          <CircleBrands {...item} key={idx} />
        </Link>
      ))}
    </SlickSlider>
  );
};

const mapStateToProps = (state: any) => ({
  brands: getBrands(state),
});

export default connect(mapStateToProps)(SlickBrandsSlider);
