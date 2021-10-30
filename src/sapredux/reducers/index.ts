import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { auth } from './auth.reducer'
import { alert } from './alert.reducer'
import { category } from './category.reducer'
import { categoryPage } from './categoryPage.reducer'
import { resource } from './resource.reducer'
import { resourcePage } from './resourcePage.reducer'


export const rootReducer = (history: History) => combineReducers({
    auth,
    alert,
    category,
    categoryPage,
    resource,
    resourcePage,
    router: connectRouter(history)
});

export type RootState = ReturnType<typeof rootReducer>