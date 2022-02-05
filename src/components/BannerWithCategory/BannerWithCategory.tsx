import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CarouselSlider } from 'components/Carousel';
import { CategoryListItem } from 'common/CategoryListItem'
import { CategoryList } from 'common/CategoryList'
import { fetchCategories } from 'sapredux/actions';
import { getCategories } from 'sapredux/selectors';


const BannerWithCategory: React.FC = (props: any) => {

  const { fetchCategories, categories } = props

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="grid w-full h-auto gap-4 px-4 mx-auto bg-fullwhite grid-rows-auto mt-28 grid-cols-Banner sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-4 lg:pt-8">
      <CategoryList>
        {categories.map((category:any) => <CategoryListItem {...category} />)}
      </CategoryList>
      <div>
        <CarouselSlider />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
      fetchCategories,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BannerWithCategory);