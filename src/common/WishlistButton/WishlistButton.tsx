import React, { useState, useEffect } from 'react'

import { wishlistService as service } from 'sapredux/services'
import { IconLabelButton } from 'common/IconLabelButton'
import { HeartOutlined } from '@ant-design/icons'
import { HeartFilled } from '@ant-design/icons'
import { showToastMessage } from 'sapredux/helpers'
import { toJsonWishlist } from 'sapredux/services/transform_data'

const post_wishlist = async (payload: any, deleteMode = false) => {
	await service
		.postData(payload, deleteMode)
		.then((response: any) =>
			showToastMessage({ type: 'success', message: response.message }),
		)
}
const onSave = (id: number, active: boolean) =>
	post_wishlist(toJsonWishlist({ id }), active)

interface IWishlistProps {
	resId?: number
	wishlist?: boolean
	margin?: string
	size?: string
	iconSize?: string
}

export const WishlistButton: React.FC<IWishlistProps> = ({
	resId = 0,
	wishlist = false,
	margin = 'md:mt-2 md:mr-2 min-phone:mt-1 min-phone:mr-1',
	size = 'min-phone:h-8 min-phone:w-8 md:h-9 md:w-9',
	iconSize = 'min-phone:text-xl md:text-2xl',
}) => {
	const [active, setActive] = useState(wishlist)
	useEffect(() => {
		setActive(wishlist)
	}, [wishlist])

	return (
		<IconLabelButton
			className={`relative right-0 float-right border border-white dark:border-darkComponentColor min-phone:rounded-full md:rounded-md hover:shadow-sm bg-fullwhite dark:bg-darkComponentColor ${size} ${margin}`}
			onClick={() => {
				setActive(!active)
				onSave(resId, active)
			}}
			icon={
				active ? (
					<HeartFilled
						className={`h-full mx-auto my-0 text-red-500 ${iconSize} min-phone:w-full md:w-6 dark:text-darkFirstColor`}
					/>
				) : (
					<HeartOutlined
						className={`h-full mx-auto my-0 text-red-500 ${iconSize} min-phone:w-full md:w-6 dark:text-darkFirstColor`}
					/>
				)
			}
		/>
	)
}
