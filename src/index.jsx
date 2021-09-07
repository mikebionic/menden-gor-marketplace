import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Spinner from './Components/Loaders/Spinner/Spinner.jsx'
import './tailwind.css'

const App = lazy(() => import('./Components/App/App.jsx'));

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
