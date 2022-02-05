import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CarouselSlider } from 'components/Carousel';
import { CategoryListItem } from 'common/CategoryListItem'
import { CategoryList } from 'common/CategoryList'
import { fetchCategories, fetchSliders } from 'sapredux/actions';
import { getCategories, getSliders, getSliderByName } from 'sapredux/selectors';
import { ErrorBoundary } from 'modules/errors';

import { all_sliders } from 'sapredux/services/mock_data/slider.mock'


const BannerWithCategory: React.FC = (props: any) => {

  const { fetchCategories, categories, fetchSliders, header_slider, sliders } = props

  useEffect(() => {
    fetchCategories();
    fetchSliders();
  }, [fetchCategories, fetchSliders]);
  console.log("heheheh sliderrr ", header_slider, sliders)

  return (
    <ErrorBoundary>
      <div className="grid w-full h-auto gap-4 px-4 mx-auto bg-fullwhite grid-rows-auto mt-28 grid-cols-Banner sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-4 lg:pt-8">
        <CategoryList>
          {categories.map((category:any) => <CategoryListItem {...category} />)}
        </CategoryList>
        <div>
          {/* {!!header_slider ? <CarouselSlider images={header_slider.images} /> : null} */}
        </div>
      </div>    
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
  header_slider: all_sliders.data[0],
  sliders: all_sliders,
  // header_slider: getSliderByName(state.slider.data, "commerce_header"),
  // sliders: getSliders(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
      fetchCategories,
      fetchSliders,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BannerWithCategory);