import React, { useEffect } from 'react'
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

// import { alertActions } from 'sapredux/actions';
import { fetchCategories, fetchBrands } from 'sapredux/actions'
import { getCategories } from 'sapredux/selectors'
import { Spinner } from 'modules/loaders'
import { MobileNavbar } from 'mobile/components/MobileNavbar'
import { MobileBottomNavigation } from 'mobile/components/MobileBottomNavigation'

const App: React.FC = (props: any) => {
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

	const { fetchCategories, categories, fetchBrands } = props

	useEffect(() => {
		fetchCategories()
		fetchBrands()
	}, [fetchCategories, fetchBrands])

	const alert = useSelector((state: RootStateOrAny) => state.alert)
	// const dispatch = useDispatch();

	// useEffect(() => {
	//   history.listen((location: any) => {
	//     dispatch(alertActions.clear());
	//   });
	// }, [dispatch]);

	const chooseNavbar =
		window.innerWidth < 768 ? (
			<MobileNavbar />
		) : (
			<Navbar categories={categories} />
		)
	const chooseFooter =
		window.innerWidth < 768 ? <MobileBottomNavigation /> : <Footer />

	const appResponsive = {
		mobileView: 'p-[0px_30px_80px_30px]',
		desktopView: 'p-[160px_60px_32px_60px]',
	}

	const appClasses =
		window.innerWidth < 768
			? appResponsive.mobileView
			: appResponsive.desktopView

	return (
		<ErrorBoundary>
			<Router>
				{chooseNavbar}
				{alert && alert.message && (
					<div className={`alert ${alert.type}`}>{alert.message}</div>
				)}
				<Toaster />
				<div className={`App bg-[#F3F4F8] dark:bg-darkBgColor ${appClasses}`}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
