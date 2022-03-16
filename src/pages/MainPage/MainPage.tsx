import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchResources, fetchFeaturedResources, fetchDiscountResources } from 'sapredux/actions';
import { getFeaturedResources, getDiscountResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { ErrorIndicator } from 'modules/errors';
import { Spinner } from 'modules/loaders';
import { ResGroup } from 'components/ResGroup';
import { SocialBar } from 'components/SocialBar';
import { Divider } from 'components/Divider';
import BannerWithCategory from 'components/BannerWithCategory';
import { SlickBrandsSlider } from 'components/SlickBrandsSlider';
import { UserAvatar } from 'components/UserAvatar';

const MainPage: React.FC = (props: any) => {
  const { 
    featured_resources,
    discount_resources,
    fetchFeaturedResources,
    fetchDiscountResources,
    discount_resource_loading,
    discount_resource_error,
    featured_resource_loading,
    featured_resource_error,
} = props;

  useEffect(() => {
    fetchFeaturedResources();
    fetchDiscountResources();
  }, []);


  const featuredList =
    !featured_resource_loading && !featured_resource_error ? (
      <ProductList data={featured_resources} />
    ) : featured_resource_loading && !featured_resource_error ? (
      <Spinner />
    ) : (
      <ErrorIndicator />
    );

  const discountList =
    !discount_resource_loading && !discount_resource_error ? (
      <ProductList data={discount_resources} />
    ) : discount_resource_loading && !discount_resource_error ? (
      <Spinner />
    ) : (
      <ErrorIndicator />
    );

  return (
    <ErrorBoundary>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 lg:pb-24 lg:pt-12 sm:px-6 lg:max-w-7xl lg:px-8 md:pt-8 min-phone:pt-4">
        <BannerWithCategory />

        <Divider title="Featured products" />
        {featuredList}

        <Divider title="Discounts!" />
        {discountList}

        <div className="grid grid-cols-ResGroup">
          <ResGroup />
          <ResGroup />
          <ResGroup />
        </div>

        <SocialBar />

        <SlickBrandsSlider />
        <UserAvatar />
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  featured_resources: getFeaturedResources(state),
  discount_resources: getDiscountResources(state),
  discount_resource_loading: state.discountResourceIds.loading,
  discount_resource_error: state.discountResourceIds.error,
  featured_resource_loading: state.featuredResourceIds.loading,
  featured_resource_error: state.featuredResourceIds.error,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchResources,
      fetchFeaturedResources,
      fetchDiscountResources
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
