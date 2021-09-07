import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import {Spinner} from './components/loaders'
import './tailwind.css'

const App = lazy(() => import('./components/App'));

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
