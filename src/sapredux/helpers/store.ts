import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'

import { rootReducer } from 'sapredux/reducers'
import { history } from 'sapredux/helpers'

const loggerMiddleware = createLogger()

const middlewares = [
	thunk,
	thunkMiddleware,
	loggerMiddleware,
	routerMiddleware(history),
]

export const store = createStore(
	rootReducer(history),
	composeWithDevTools(
		applyMiddleware(
			...middlewares
		)
	)
);