import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchResources } from 'sapredux/actions';
import { getResources } from 'sapredux/selectors';
import { resourceService } from 'sapredux/services'

import { ErrorBoundary } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { ErrorIndicator } from 'modules/errors';
import { Spinner } from 'modules/loaders';
import { ResGroup } from 'components/ResGroup';
import { SocialBar } from 'components/SocialBar';
import { Divider } from 'components/Divider';
import BannerWithCategory from 'components/BannerWithCategory';
// import { Tab } from 'components/Tab';
// import { DropdownMenu } from 'common/DropdownMenu';

// import { ChevronDownIcon } from '@heroicons/react/solid';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { MdLanguage } from 'react-icons/md';
// import { IconLabelButton } from 'common/IconLabelButton';
// import { BsWallet2 } from 'react-icons/bs';
// import { PriceButton } from 'common/PriceButton';
// import { StarRate } from 'common/StarRate';
import { SlickBrandsSlider } from 'components/SlickBrandsSlider';

const MainPage: React.FC = (props: any) => {
  const { fetchResources, resources, resource_loading, resource_error } = props;

  const [featured_resources, set_featured_resources] = useState([])
  const get_featured_resources = async() => {
    const featured_resources = await resourceService.fetchFeatured_data()
    featured_resources && set_featured_resources(featured_resources)
  }

  
  const [discount_resources, set_discount_resources] = useState([])
  const get_discount_resources = async() => {
    const discount_resources = await resourceService.fetchDiscount_data()
    discount_resources && set_discount_resources(discount_resources)
  }

  useEffect(() => {
    fetchResources();
    get_featured_resources();
    get_discount_resources();
  }, [fetchResources]);

  const productsList =
    !resource_loading && !resource_error ? (
      <ProductList data={resources} />
    ) : resource_loading && !resource_error ? (
      <Spinner />
    ) : (
      <ErrorIndicator />
    );

  const featuredList =
    featured_resources ?
      <ProductList data={featured_resources} />
    : null
  
  const discountsList =
    discount_resources ?
      <ProductList data={discount_resources} />
    : null

  // const dropdownItems = [
  //   {
  //     name: 'foo',
  //     icon: <ChevronDownIcon />,
  //   },
  //   {
  //     name: 'bar',
  //     // icon: <ChevronDownIcon />,
  //   },
  // ];

  return (
    <ErrorBoundary>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 lg:pb-24 lg:pt-12 sm:px-6 lg:max-w-7xl lg:px-8 md:pt-8 min-phone:pt-4">
        <BannerWithCategory />
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Main page
          </h2>
          {productsList}
        </div>
        <div className="grid grid-cols-ResGroup">
          <ResGroup />
          <ResGroup />
          <ResGroup />
        </div>

        <Divider title="Featured products" />
        {featuredList}

        <Divider title="Discounts!" />
        {discountsList}

        <SocialBar />

        {/* <Tab />
        <StarRate />
        <PriceButton priceValue={11.14} />
        <DropdownMenu
          items={dropdownItems}
          menuButtonLabel="Options"
          menuButtonIcon={<ChevronDownIcon className="w-full h-full" />}
          activeClassName="bg-red-500 text-white"
          menuButton={
            <>
              <IconLabelButton
                className="px-0 mt-3 font-medium text-white"
                icon={
                  <BsWallet2 className="w-6 h-6 mx-3 text-2xl text-black" />
                }
              />
              <span className="absolute top-0 font-semibold text-black left-70 text-10">
                TMT
              </span>
            </>
          }
        /> */}
        <SlickBrandsSlider />
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resources: getResources(state),
  resource_loading: state.resource.loading,
  resource_error: state.resource.error,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchResources,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
