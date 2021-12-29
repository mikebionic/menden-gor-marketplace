import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchResources, resourceAddedToCart } from 'sapredux/actions';
import { getResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { bindActionCreators } from 'redux';

import { ErrorIndicator } from 'modules/errors'
import { Spinner } from 'modules/loaders'


const MainPage: React.FC = (props: any) => {
  const {
    fetchResources,
    resources,
    onAddedToCart,
    resource_loading,
    resource_error,
  } = props;

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const productsList = 
    (!resource_loading && !resource_error)? <ProductList data={resources} onAddedToCart={onAddedToCart} /> :
    (resource_loading && !resource_error)? <Spinner /> : <ErrorIndicator />

  return (
    <ErrorBoundary>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Main page</h2>
          { productsList }
        </div>
      </div>

    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resources: getResources(state),
  resource_loading: state.resource.loading,
  resource_error: state.resource.error
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    fetchResources,
    onAddedToCart: resourceAddedToCart
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MainPage));
