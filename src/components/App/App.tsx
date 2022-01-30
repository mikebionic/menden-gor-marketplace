import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import 'i18n';

import { ErrorBoundary } from 'modules/errors';
import { AppRoutes, UserRoutes } from 'navigation';
import { Navbar } from 'components/Navbar';

import { history } from 'sapredux/helpers';
import { alertActions } from 'sapredux/actions';

import { connect } from 'react-redux';

import { fetchCategories } from 'sapredux/actions';
import { getCategories } from 'sapredux/selectors';
import { Footer } from 'components/Footer';

const App: React.FC = (props: any) => {
  const { fetchCategories, categories } = props;

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const alert = useSelector((state: RootStateOrAny) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location: any) => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <>
      <Navbar categories={categories} />
      <ErrorBoundary>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <div className={`App bg-fullPageColor`}>
          <AppRoutes />
          {/* <UserRoutes /> */}
        </div>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = {
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
