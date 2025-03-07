import { Routes, Route } from 'react-router-dom'

import { MainPageWrapper } from 'pages/MainPage'
import { PrivateRoute } from 'navigation/PrivateRoute'

import { routeConstants } from 'navigation'
import { AboutPage } from 'pages/AboutPage'
import { ContactPage } from 'pages/ContactPage'
import { NotFoundPage } from 'pages/error'
import { UserRoutes } from 'navigation'
import { VGrid } from 'pages/VGrid'
import { ProductPage } from 'pages/ProductPage'
import { LoginPage, LogoutPage, RegisterPage } from 'pages/auth'
import { CheckoutPage } from 'pages/CheckoutPage'

import { MobileCategoryPage } from 'mobile/pages/MobileCategoryPage'
import MobileVGridPage from 'mobile/pages/MobileVGridPage'
import { MobileCheckoutPage } from 'mobile/pages/MobileCheckoutPage'
import MobileProductPage from 'mobile/pages/MobileProductPage'
import MobileSettingsPage from 'mobile/pages/MobileSettingsPage'
import { ResetPasswordPage } from 'pages/auth/ResetPasswordPage'

const chooseVGridPage =
	window.innerWidth < 768 ? <MobileVGridPage /> : <VGrid />

const chooseCheckoutPage =
	window.innerWidth < 768 ? <MobileCheckoutPage /> : <CheckoutPage />

const chooseProductPage =
	window.innerWidth < 768 ? <MobileProductPage /> : <ProductPage />

export const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={routeConstants.root.route} element={<MainPageWrapper />} />

			<Route path={routeConstants.login.route} element={<LoginPage />} />
			<Route path={routeConstants.logout.route} element={<LogoutPage />} />
			<Route path={routeConstants.register.route} element={<RegisterPage />} />
			<Route
				path={routeConstants.reset.route}
				element={<ResetPasswordPage />}
			/>

			<Route
				path={routeConstants.brands.route}
				element={<MobileCategoryPage />}
			/>
			<Route
				path={routeConstants.categories.route}
				element={<MobileCategoryPage />}
			/>
			<Route
				path={routeConstants.settings.route}
				element={<MobileSettingsPage />}
			/>

			<Route
				path={`${routeConstants.product.route}:id/*`}
				element={chooseProductPage}
			/>

			<Route
				path={routeConstants.cart.route}
				element={<MobileCheckoutPage />}
			/>

			<Route path={routeConstants.about.route} element={<AboutPage />} />
			<Route path={routeConstants.contact.route} element={<ContactPage />} />
			<Route path={routeConstants.vGrid.route} element={chooseVGridPage} />
			<Route
				path={routeConstants.checkout.route}
				element={chooseCheckoutPage}
			/>

			{/*<Route path="*" element={<UserRoutes />} />*/}
			<Route path="*" element={<PrivateRoute component={UserRoutes} />} />
			<Route element={<NotFoundPage />} />
		</Routes>
	)
}
