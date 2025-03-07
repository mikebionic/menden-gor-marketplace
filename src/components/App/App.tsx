import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RootStateOrAny, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import 'i18n'
import { useTranslation } from 'react-i18next'
import { Toaster } from 'react-hot-toast'

import getTitle from 'components/App/getTitle'
import { useHeader } from 'components/HeaderProvider'

import { AppRoutes } from 'navigation'
import { ErrorBoundary } from 'modules/errors'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'

import {
	fetchCategories,
	fetchBrands,
	fetchCompanyInfo,
	fetchSliders,
} from 'sapredux/actions'
import {
	fetchFeaturedResources,
	fetchDiscountResources,
	fetchLatestResources,
	fetchResourceCollections,
} from 'sapredux/actions'

import { getCategories } from 'sapredux/selectors'
import { MobileNavbar } from 'mobile/components/MobileNavbar'
import { MobileBottomNavigation } from 'mobile/components/MobileBottomNavigation'
import { Spinner } from 'modules/loaders'

const App: React.FC = (props: any) => {
	const [isLoading, setIsLoading] = useState(true)
	const { t } = useTranslation()
	const { onHeaderUpdate }: any = useHeader()
	const page_data_list = getTitle(t)
	var current_path = window.location.pathname

	useEffect(() => {
		let pageData: any = fetchPageData(page_data_list, current_path)
		onHeaderUpdate({ ...pageData })
	}, [current_path])

	const fetchPageData = (page_data_list: any, current_path: any) => {
		var pageData = null
		page_data_list.map((page_data: any) => {
			if (page_data.path === current_path) {
				pageData = page_data
			}
			return true
		})
		return pageData
	}

	const {
		fetchCategories,
		categories,
		fetchBrands,
		fetchCompanyInfo,
		fetchSliders,
		fetchFeaturedResources,
		fetchDiscountResources,
		fetchLatestResources,
		fetchResourceCollections,
	} = props

	useEffect(() => {
		Promise.all([
			fetchCategories(),
			fetchBrands(),
			fetchCompanyInfo(),
			fetchSliders(),
			fetchFeaturedResources(),
			fetchDiscountResources(),
			fetchLatestResources(),
			fetchResourceCollections(),
		])
			.then(() => setIsLoading(false))
			.catch((error) => console.log(error))
	}, [])
	// useEffect(() => {
	// 	fetchCategories()
	// 	fetchBrands()
	// 	fetchCompanyInfo()
	// 	fetchSliders()
	// 	fetchFeaturedResources()
	// 	fetchDiscountResources()
	// 	fetchLatestResources()
	// 	fetchResourceCollections()
	// }, [
	// 	fetchCategories,
	// 	fetchBrands,
	// 	fetchCompanyInfo,
	// 	fetchSliders,
	// 	fetchFeaturedResources,
	// 	fetchDiscountResources,
	// 	fetchLatestResources,
	// 	fetchResourceCollections,
	// ])

	const alert = useSelector((state: RootStateOrAny) => state.alert)
	const chooseNavbar =
		window.innerWidth < 768 ? (
			<MobileNavbar />
		) : (
			<Navbar categories={categories} />
		)
	const chooseFooter =
		window.innerWidth < 768 ? <MobileBottomNavigation /> : <Footer />

	const appResponsive = {
		mobileView: 'p-[6rem_30px_6rem_30px]',
		desktopView: 'p-[160px_60px_32px_60px]',
	}

	const appClasses =
		window.innerWidth < 768
			? appResponsive.mobileView
			: appResponsive.desktopView

	if (isLoading) {
		return <Spinner />
	}

	return (
		<ErrorBoundary>
			<Router>
				{chooseNavbar}
				{alert && alert.message && (
					<div className={`alert ${alert.type}`}>{alert.message}</div>
				)}
				<Toaster />
				<div className={`App bg-[#F0F5F9] dark:bg-darkBgColor ${appClasses}`}>
					<AppRoutes />
				</div>

				{chooseFooter}
			</Router>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	categories: getCategories(state),
})

const mapDispatchToProps = {
	fetchCategories,
	fetchBrands,
	fetchCompanyInfo,
	fetchSliders,
	fetchFeaturedResources,
	fetchDiscountResources,
	fetchLatestResources,
	fetchResourceCollections,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
