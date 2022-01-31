import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchResources, resourceAddedToCart } from 'sapredux/actions';
import { getResourceById } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';

import { ErrorIndicator } from 'modules/errors';
import { Spinner } from 'modules/loaders';
import { ProductCard } from 'components/ProductCard';

const ProductPage: React.FC = (props: any) => {
  const { fetchResources, resource, resource_loading, resource_error, onAddedToCart } = props;

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const productView =
    !resource_loading && !resource_error ? (
      <ProductCard data={resource} />
    ) : resource_loading && !resource_error ? (
      <Spinner />
    ) : (
      <ErrorIndicator />
    );

  return (
    <ErrorBoundary>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 lg:pb-24 lg:pt-12 sm:px-6 lg:max-w-7xl lg:px-8 md:pt-8 min-phone:pt-4">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          { productView }
        </div>
        <div>
          { resource.fullDesc }
          { resource.category }          
        </div>

      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any, props:any) => {
  const {history} = props
  // take id from history and add to redux fetcher

  return {
    resource: getResourceById(state.resources.data, 2),
    // resources: state.resourcePage.ids,
    resource_loading: state.resource.loading,
    resource_error: state.resource.error,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchResources,
      onAddedToCart: resourceAddedToCart
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProductPage));
