import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import 'i18n';
import { useTranslation } from 'react-i18next';

import getTitle from 'components/App/getTitle';
import { useHeader } from '../HeaderProvider';

import { AppRoutes } from 'navigation';
import { ErrorBoundary } from 'modules/errors';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';

import { history } from 'sapredux/helpers';
import { alertActions } from 'sapredux/actions';
import { fetchCategories, fetchBrands } from 'sapredux/actions';
import { getCategories } from 'sapredux/selectors';

const App: React.FC = (props: any) => {
  const { t } = useTranslation();
  const { onHeaderUpdate }: any = useHeader();
  const page_data_list = getTitle(t);
  var current_path = history.location.pathname;

  useEffect(() => {
    let pageData: any = fetchPageData(page_data_list, current_path);
    onHeaderUpdate({ ...pageData });
  }, [current_path]);

  const fetchPageData = (page_data_list: any, current_path: any) => {
    var pageData = null;
    page_data_list.map((page_data: any) => {
      if (page_data.path === current_path) {
        pageData = page_data;
      }
      return true;
    });
    return pageData;
  };

  const { fetchCategories, categories, fetchBrands } = props;

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, [fetchCategories, fetchBrands]);

  const alert = useSelector((state: RootStateOrAny) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location: any) => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <>
      <ErrorBoundary>
        <Navbar categories={categories} />
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <div className={`App bg-fullPageColor p-main-content pt-40 pb-8`}>
          <AppRoutes />
        </div>

        <Footer />
      </ErrorBoundary>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = {
  fetchCategories,
  fetchBrands,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
