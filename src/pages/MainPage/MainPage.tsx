import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchResources, resourceAddedToCart } from 'sapredux/actions';
import { getResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { ErrorIndicator } from 'modules/errors';
import { Spinner } from 'modules/loaders';
import { ResGroup } from 'components/ResGroup';
import { SocialBar } from 'components/SocialBar';
import { Divider } from 'components/Divider';
import BannerWithCategory from 'components/BannerWithCategory';
import { Tab } from 'components/Tab';
import { DropdownMenu } from 'common/DropdownMenu';

import { ChevronDownIcon } from '@heroicons/react/solid';
import { AiOutlineEdit } from 'react-icons/ai';

const MainPage: React.FC = (props: any) => {
  const { fetchResources, resources, resource_loading, resource_error } = props;

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const productsList =
    !resource_loading && !resource_error ? (
      <ProductList data={resources} />
    ) : resource_loading && !resource_error ? (
      <Spinner />
    ) : (
      <ErrorIndicator />
    );

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
        <Divider title="Just for you" />
        <SocialBar />
        <Tab />
        <DropdownMenu
          menuButtonLabel="Options"
          menuButtonIcon={<ChevronDownIcon className="w-full h-full" />}
          menuItemIcon={<AiOutlineEdit className="w-full h-full" />}
          menuItemLabel="Edit"
        />
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
)(withRouter(MainPage));
