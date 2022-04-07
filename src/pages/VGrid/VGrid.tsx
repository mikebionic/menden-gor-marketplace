import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  applyFilters,
  fetchResources,
  loadMoreResources,
} from 'sapredux/actions';
import { getResources } from 'sapredux/selectors';

import { ErrorBoundary, ErrorIndicator } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { Spinner } from 'modules/loaders';
import { ProductsFilterPanel } from 'components/ProductsFilterPanel';

const VGrid: React.FC = (props: any) => {
  const {
    fetchResources,
    resources,
    resource_loading,
    resource_error,
    onFiltersApply,
    loadMoreResources,
  } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [query_string, set_query_string] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const history_filters: any = {
      category: params.get('category'),
      brand: params.get('brand'),
      search: params.get('search'),
      from_price: params.get('from_price'),
      to_price: params.get('to_price'),
      division: params.get('division'),
      sort: params.get('sort'),
      showDiscounts: params.get('showDiscounts'),
    };
    let search_querystring = `?`;
    Object.keys(history_filters).map((key) => {
      console.log('HISTORY ', key, history_filters[key]);
      if (history_filters[key]) {
        search_querystring += `${key}=${history_filters[key]}&`;
      }
    });
    onFiltersApply(history_filters);
    set_query_string(search_querystring);
    navigate(search_querystring);
  }, [location.search]);

  useEffect(() => {
    query_string.length > 2 && fetchResources(query_string);
  }, [query_string]);

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
      <div className="grid pb-8 text-base grid-cols-[auto_1fr]">
        {/* first column */}
        <ProductsFilterPanel />
        {/* second column */}
        <div className="gap-4 ml-4 ">{productsList}</div>
      </div>
      <button
        onClick={() => loadMoreResources()}
        className="m-auto dark:text-darkTextWhiteColor"
      >
        Load more
      </button>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resources: getResources(state),
  resource_loading: state.resource.loading,
  resource_error: state.resource.error,
});

const mapDispatchToProps = {
  fetchResources,
  loadMoreResources,
  onFiltersApply: applyFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(VGrid);
