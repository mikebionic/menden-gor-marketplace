import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from 'sapredux/helpers'
import { Spinner } from 'modules/loaders'

import './tailwind.css'
import 'antd/dist/antd.less'

import AppHeader from 'components/AppHeader'
import { HeaderProvider } from 'components/HeaderProvider'

const App = React.lazy(() =>
	import('components/App').then(({ App }) => ({ default: App })),
)

ReactDOM.render(
	<React.Suspense fallback={<Spinner />}>
		<Provider store={store}>
			<HeaderProvider>
				<AppHeader />
				<App />
			</HeaderProvider>
		</Provider>
	</React.Suspense>,
	document.getElementById('root'),
)
