import React, { useState, useEffect } from 'react'

import { WishlistTable } from 'common/Table'
import { wishlistService } from 'sapredux/services'
import { Spinner } from 'modules/loaders'
import { ErrorBoundary, ErrorIndicator } from 'modules/errors'
import MobileWishlistPage from 'mobile/pages/MobileWishlistPage'

export const WishlistPage: React.FC = () => {
	const [loading, set_loading] = useState(true)
	const [error, set_error] = useState(false)
	const [wishlist_items, set_wishlist_items] = useState([])
	const get_wishlist_data = async () => {
		set_loading(true)
		set_error(false)
		await wishlistService.fetchAll_data().then(
			(response: any) => set_wishlist_items(response),
			(error: any) => set_error(true),
		)
		set_loading(false)
	}

	useEffect(() => {
		get_wishlist_data()
	}, [])

	const mobile = window.innerWidth < 768 ? true : false

	return (
		<ErrorBoundary>
			{loading && <Spinner />}
			{error && <ErrorIndicator />}
			{!loading && !error && mobile ? (
				<MobileWishlistPage data={wishlist_items} />
			) : (
				<WishlistTable data={wishlist_items} />
			)}
		</ErrorBoundary>
	)
}
