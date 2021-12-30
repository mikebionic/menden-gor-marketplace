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


const store = createStore(
	rootReducer(history),
	composeWithDevTools(
		applyMiddleware(
			...middlewares
		)
	)
);

const delayedActionCreator = (timeout:number) => (dispatch: any) => {
	setTimeout(() => dispatch({
		type: 'DELAYED_ACTION',
	}), timeout);
};

// store.dispatch(delayedActionCreator(3000));

export { store }