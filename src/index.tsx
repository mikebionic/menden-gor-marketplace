import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from 'sapredux/helpers';
import { Spinner } from 'modules/loaders';
import './tailwind.css';

const App = React.lazy(() =>
  import('components/App').then(({ App }) => ({ default: App })),
);

ReactDOM.render(
  <React.Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.Suspense>,
  document.getElementById('root'),
);
