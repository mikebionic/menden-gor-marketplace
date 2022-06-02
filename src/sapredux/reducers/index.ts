import { combineReducers } from 'redux'

import { alert } from './alert.reducer'
import { auth } from './auth.reducer'
import { cart } from './cart.reducer'
import { category } from './category.reducer'
import { categoryPage } from './categoryPage.reducer'
import { company } from './company.reducer'
import { resource } from './resource.reducer'
import { resourceCollection } from './resourceCollection.reducer'
import { resourcePage } from './resourcePage.reducer'
import {
	resourcesPage,
	discountResourceIds,
	featuredResourceIds,
	latestResourceIds,
	wishlistResourceIds,
} from './resourcesPage.reducer'
import { slider } from './slider.reducer'
import { brand } from './brand.reducer'
import { productFilter } from './productFilter.reducer'

export const rootReducer = () =>
	combineReducers({
		alert,
		auth,
		brand,
		cart,
		category,
		categoryPage,
		company,
		productFilter,
		resource,
		resourceCollection,
		resourcePage,
		resourcesPage,
		discountResourceIds,
		featuredResourceIds,
		latestResourceIds,
		wishlistResourceIds,
		slider,
	})

export type RootState = ReturnType<typeof rootReducer>
