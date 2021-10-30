import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCategories, fetchResources } from 'sapredux/actions';
import { getCategories, getResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';


const MainPage: React.FC = (props: any) => {
  const {
    fetchCategories,
    categories,
    fetchResources,
    resources
  } = props;
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <ErrorBoundary>
      <div>
        Main page
        {resources.map((resource: any) => <h1>{resource.name}</h1>)}
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
