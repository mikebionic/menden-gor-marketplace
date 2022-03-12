import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from 'sapredux/helpers';
import { Spinner } from 'modules/loaders';

import './tailwind.css';
import 'antd/dist/antd.css';

import AppHeader from 'components/AppHeader';
import { HeaderProvider } from 'components/HeaderProvider';

const App = React.lazy(() =>
  import('components/App').then(({ App }) => ({ default: App })),
);

ReactDOM.render(
  <React.Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HeaderProvider>
          <AppHeader />
          <App />
        </HeaderProvider>
      </ConnectedRouter>
    </Provider>
  </React.Suspense>,
  document.getElementById('root'),
);
