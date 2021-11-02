import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCategories, fetchResources } from 'sapredux/actions';
import { getCategories, getResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';
import { ProductCard } from 'components/ProductCard'

const MainPage: React.FC = (props: any) => {
  const {
    fetchCategories,
    categories,
    fetchResources,
    resources
  } = props;
  useEffect(() => {
    fetchCategories();
    fetchResources();
  }, [fetchCategories, fetchResources]);

  return (
    <ErrorBoundary>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Main page</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {resources.map((resource: any) => <ProductCard {...resource} />)}

          </div>
        </div>
      </div>

    </ErrorBoundary>


  );
};

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
  resources: getResources(state),
});

const mapDispatchToProps = {
  fetchCategories,
  fetchResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MainPage));
