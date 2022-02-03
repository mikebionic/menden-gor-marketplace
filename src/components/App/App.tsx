import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import 'i18n';
import { useTranslation } from 'react-i18next';

import getTitle from 'components/App/getTitle';
import { useHeader } from '../HeaderProvider';

import { ErrorBoundary } from 'modules/errors';
import { AppRoutes } from 'navigation';
import { Navbar } from 'components/Navbar';

import { history } from 'sapredux/helpers';
import { alertActions } from 'sapredux/actions';

import { fetchCategories } from 'sapredux/actions';
import { getCategories } from 'sapredux/selectors';
import { Footer } from 'components/Footer';

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
        <div className={`App bg-fullPageColor p-main-content`}>
          <AppRoutes />
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
