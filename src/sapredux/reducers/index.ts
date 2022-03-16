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
import { resourcesPage, discountResourceIds, featuredResourceIds } from './resourcesPage.reducer'
import { slider } from './slider.reducer'
import { brand } from './brand.reducer'
import { productFilter } from './productFilter.reducer'


export const rootReducer = (history: History) => combineReducers({
    alert,
    auth,
    brand,
    cart,
    category,
    categoryPage,
    productFilter,
    resource,
    resourcePage,
    resourcesPage,
    discountResourceIds,
    featuredResourceIds,
    slider,
    router: connectRouter(history)
});

export type RootState = ReturnType<typeof rootReducer>