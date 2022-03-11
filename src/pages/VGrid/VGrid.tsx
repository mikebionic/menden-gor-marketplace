import React, { useEffect, useState } from 'react';
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
import { setTimeout } from 'timers';

const VGrid: React.FC = (props: any) => {
  const {
    fetchResources,
    resources,
    resource_loading,
    resource_error,
    onFiltersApply,
  } = props;

  const [query_string, set_query_string] = useState('')
  useEffect(() => {
    setTimeout(() => {
      console.log(query_string)
      fetchResources(query_string);
    }, 200);
  }, [fetchResources, query_string]);

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const history_filters: any = {
      "category": params.get('category'),
      "brand": params.get('brand'),
      "search": params.get('search'),
      "fromPrice": params.get('fromPrice'),
      "toPrice": params.get('toPrice'),
      "division": params.get('division'),
      "sortType": params.get('sortType'),
    }
    onFiltersApply(history_filters)
    console.log("filters applied")
    let search_querystring = '?';//`${history.location.pathname}?`
    Object.keys(history_filters).map((key) => {
      if (history_filters[key]){
        search_querystring += `${key}=${history_filters[key]}&`
      }
    })
    set_query_string(search_querystring)
    // history.push(search_querystring)
    console.log(search_querystring)
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