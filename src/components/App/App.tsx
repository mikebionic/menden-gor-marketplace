import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import 'i18n';

import { ErrorBoundary } from 'modules/errors';
import { AppRoutes } from 'navigation';
import { Navbar } from 'components/Navbar'

import { history} from 'sapredux/helpers';
import { alertActions } from 'sapredux/actions';

const App: React.FC = () => {
  const alert = useSelector((state: RootStateOrAny) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location:any) => {
      dispatch(alertActions.clear())});
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ErrorBoundary>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <div className={`App`}>
          <AppRoutes />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App