import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { applyFilters, fetchResources } from 'sapredux/actions';
import { getResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { ErrorIndicator } from 'modules/errors';
import { Spinner } from 'modules/loaders';
import { ProductsFilterPanel } from 'components/ProductsFilterPanel'
import { history } from 'sapredux/helpers'

const VGrid: React.FC = (props: any) => {
  const {
    fetchResources,
    resources,
    resource_loading,
    resource_error,
    onFiltersApply,
  } = props;

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const history_filters = {
      "category": params.get('category'),
      "brand": params.get('brand'),
      "search": params.get('search'),
      "fromPrice": params.get('fromPrice'),
      "toPrice": params.get('toPrice'),
      "division": params.get('division'),
      "sortType": params.get('sortType'),
    }
    onFiltersApply(history_filters)
  }, [history])


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
      <div className="grid pb-8 text-base grid-cols-VGrid">
        {/* first column */}
        <ProductsFilterPanel />
        {/* second column */}
        <div className="gap-4 ml-4 ">{productsList}</div>
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
      onFiltersApply: applyFilters,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VGrid);