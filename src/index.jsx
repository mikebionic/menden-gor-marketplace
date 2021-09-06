import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './tailwind.css'

const App = lazy(() => import('./Components/App/App.jsx'));

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
