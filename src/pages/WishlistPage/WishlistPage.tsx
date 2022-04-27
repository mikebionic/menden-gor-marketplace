import React, { useEffect } from 'react'

import { WishlistTable } from 'common/Table'
import { Spinner } from 'modules/loaders'
import { ErrorBoundary, ErrorIndicator } from 'modules/errors'
import MobileWishlistPage from 'mobile/pages/MobileWishlistPage'
import { fetchWishlistResources } from 'sapredux/actions'
import { getWishlistResources } from 'sapredux/selectors'
import { connect } from 'react-redux'

const WishlistPage: React.FC = (props: any) => {
	const { resources, loading, error, fetchResources } = props

	useEffect(() => {
		fetchResources()
	}, [])

	const mobile = window.innerWidth < 768 ? true : false

	return (
		<ErrorBoundary>
			{loading && <Spinner />}
			{error && <ErrorIndicator />}
			{!loading && !error && mobile ? (
				<MobileWishlistPage data={resources} />
			) : (
				<WishlistTable data={resources} />
			)}
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => {
	return {
		resources: getWishlistResources(state),
		loading: state.wishlistResourceIds.loading,
		error: state.wishlistResourceIds.error,
	}
}

const mapDispatchToProps = {
	fetchResources: fetchWishlistResources,
}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage)
