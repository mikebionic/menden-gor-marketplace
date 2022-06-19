import { Link } from 'react-router-dom'
import { ErrorBoundary } from 'modules/errors'
import { Badge } from 'antd'
import { Image } from 'common/Image'
import { ProductAddToCart } from 'components/ProductCard'
import { Ribbon } from 'common/Ribbon'
import { routeConstants } from 'navigation'
import { StarRate } from 'common/StarRate'
import { PriceButton } from 'common/PriceButton'
import { WishlistButton } from 'common/WishlistButton'

export const MobileProductCard = ({ data }: any) => {
	const {
		id,
		name,
		description,
		realPrice,
		priceValue,
		currencySymbol,
		image,
		isNew,
		discount,
		wishlist,
		ratingValue,
		categoryName,
	} = data

	let resource_description = description
		? description.length > 50
			? `${description.slice(0, 50)}...`
			: description
		: ''

	let resource_name = name
		? name.length > 25
			? `${name.slice(0, 50)}...`
			: name
		: ''

	return (
		<ErrorBoundary>
			<div className="relative grid w-40 h-72 items-center grid-cols-1 mt-4 bg-white dark:bg-darkComponentColor rounded-lg grid-rows-[max-content_30px_auto_auto_auto] shadow-defaultShadow">
				<Badge.Ribbon
					text={discount}
					placement="start"
					className={`cursor-default absolute top-[72%] -ml-2 text-[11px] discount-left ${
						discount ?? 'hidden'
					}`}
					color="red"
				>
					<div className="items-center justify-center mx-auto my-3 overflow-hidden bg-gray-200 w-36 h-36 dark:bg-darkBgColor ">
						<div className="relative">
							{isNew ? <Ribbon /> : null}
							<span className="absolute top-0 right-0">
								<WishlistButton resId={id} wishlist={wishlist} />
							</span>
							<span className="absolute right-0 top-[6.5rem]">
								<ProductAddToCart resourceId={id} />
							</span>
						</div>

						<Link to={`${routeConstants.product.route}${id}/${name}`}>
							<Image
								src={image}
								alt={`${name} - ${resource_description}`}
								className="object-contain object-center w-full h-full max-w-full max-h-full py-4 lg:w-full lg:h-full"
							/>
						</Link>
					</div>
				</Badge.Ribbon>
				<Link to={`${routeConstants.product.route}${id}/${name}`}>
					<div className="mx-auto my-0 text-center w-max">
						<h3 className="mx-auto my-0 text-sm font-semibold text-black dark:text-darkTextWhiteColor">
							{resource_name}
						</h3>
						<hr className="w-full dark:border-darkFirstColor" />
					</div>
				</Link>

				<p className="mx-2 text-xs text-justify text-gray-400 dark:text-darkText">
					{categoryName}
				</p>
				<StarRate disabled={true} value={ratingValue} starSize="text-[10px]" />
				<div
					className={`grid grid-flow-col auto-cols-max items-center py-1 border-t border-gray-300 dark:border-darkFirstColor ${
						discount ? 'justify-between' : 'justify-end'
					}`}
				>
					{discount && (
						<p className="ml-2 text-sm text-justify text-gray-400 line-through">
							{realPrice} {currencySymbol}
						</p>
					)}

					<div className="mx-4 text-sm text-justify">
						<PriceButton
							priceValue={priceValue}
							currencySymbol={currencySymbol}
							width="w-auto"
							coloredButton={true}
							fontSize="text-sm"
						/>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}
