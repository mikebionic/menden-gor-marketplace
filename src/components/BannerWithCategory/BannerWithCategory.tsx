import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CarouselSlider } from 'components/Carousel';
import { CategoryListItem } from 'common/CategoryListItem'
import { CategoryList } from 'common/CategoryList'
import { fetchCategories, fetchSliders } from 'sapredux/actions';
import { getCategories, getSliderByName } from 'sapredux/selectors';
import { ErrorBoundary } from 'modules/errors';
import { namesConfig } from 'configs';


const BannerWithCategory: React.FC = (props: any) => {

  const { fetchCategories, categories, fetchSliders, header_slider } = props

  useEffect(() => {
    fetchCategories();
    fetchSliders();
  }, [fetchCategories, fetchSliders]);

  return (
    <ErrorBoundary>
      <div className="grid w-full h-auto gap-4 px-4 mx-auto bg-fullwhite grid-rows-auto mt-28 grid-cols-Banner sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-4 lg:pt-8">
        <CategoryList>
          {categories.map((category:any, idx:number) => <CategoryListItem key={idx} {...category} />)}
        </CategoryList>
        <div>
          {!!header_slider ? <CarouselSlider images={header_slider.images} /> : null}
        </div>
      </div>    
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
  header_slider: getSliderByName(state.slider.data, namesConfig.main_page_slider_name),
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