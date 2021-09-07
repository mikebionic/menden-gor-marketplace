import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Spinner from './components/loaders/Spinner/Spinner.jsx'
import './tailwind.css'

const App = lazy(() => import('./components/App/App.jsx'));

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
