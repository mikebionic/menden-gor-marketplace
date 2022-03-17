import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'

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
  console.log(location)

  const [query_string, set_query_string] = useState('');
  useEffect(() => {
    setTimeout(() => {
      console.log("fetching resources", query_string);
      fetchResources(query_string);
    }, 200);
  }, [query_string]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const history_filters: any = {
      category: params.get('category'),
      brand: params.get('brand'),
      search: params.get('search'),
      fromPrice: params.get('fromPrice'),
      toPrice: params.get('toPrice'),
      division: params.get('division'),
      sortType: params.get('sortType'),
    };
    onFiltersApply(history_filters);
    let search_querystring = '?'; //`${history.location.pathname}?`
    Object.keys(history_filters).map((key) => {
      if (history_filters[key]) {
        search_querystring += `${key}=${history_filters[key]}&`;
      }
    });
    set_query_string(search_querystring);
    navigate(search_querystring)
  }, [location]);

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
      <button onClick={() => loadMoreResources()}>Load more</button>
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
      loadMoreResources,
      onFiltersApply: applyFilters,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VGrid);
