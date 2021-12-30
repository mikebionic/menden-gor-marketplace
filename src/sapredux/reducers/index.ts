import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { alert } from './alert.reducer'
import { auth } from './auth.reducer'
import { cart } from './cart.reducer'
import { category } from './category.reducer'
import { categoryPage } from './categoryPage.reducer'
import { resource } from './resource.reducer'
import { resourcePage } from './resourcePage.reducer'


export const rootReducer = (history: History) => combineReducers({
    alert,
    auth,
    cart,
    category,
    categoryPage,
    resource,
    resourcePage,
    router: connectRouter(history)
});

export type RootState = ReturnType<typeof rootReducer>