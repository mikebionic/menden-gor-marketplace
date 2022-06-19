import { Link } from 'react-router-dom'
import { Image } from 'common/Image'
import { routeConstants } from 'navigation'
import { ProductAddToCart } from 'components/ProductCard'
import { AiOutlineDelete } from 'react-icons/ai'
import { StarRate } from 'common/StarRate'
import { PriceButton } from 'common/PriceButton'
import { MdClose } from 'react-icons/md'
import { ErrorBoundary } from 'modules/errors'

export const MobileCartRow = ({
	item,
	onIncrease,
	onDecrease,
	onDelete,
}: any) => {
	return (
		item && (
			<div className="grid grid-flow-row gap-4 pt-4 auto-rows-max">
				<div className="relative grid grid-cols-[auto_1fr] items-center gap-2 w-full h-28 p-2 rounded-md bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow">
					<MdClose
						className="absolute text-base text-gray-400 top-2 right-2"
						onClick={() => onDelete(item.id)}
					/>
					<div className="w-20 h-20 bg-gray-200 dark:bg-darkBgColor">
						<Image
							src={item.image}
							alt={`${item.name} - ${item.description}`}
							className="object-contain object-center w-full h-full"
						/>
					</div>
					<div className="grid grid-flow-row gap-1 auto-rows-max">
						<div>
							<Link
								className="font-bold text-center text-black text-gradient"
								to={`${routeConstants.product.route}${item.id}/${item.name}`}
							>
								{item.name}
							</Link>
							<div className="grid grid-flow-col gap-2 auto-cols-max">
								<StarRate className="px-0" starSize="text-[9px]" value={4} />
								{/* <p className="text-base text-[#6B6B6B] cursor-default">
                      100 Teswir
                    </p> */}
							</div>
						</div>
						<div
							className={`grid grid-flow-col pt-1 auto-cols-max items-center border-t border-gray-300 dark:border-darkFirstColor justify-between`}
						>
							{/* {discount && (
										<p className="mx-4 text-xs text-justify text-gray-400 line-through">
											{realPrice} {currencySymbol}
										</p>
									)} */}

							<div className="mx-4 text-sm text-justify">
								<PriceButton
									priceValue={item.priceValue}
									currencySymbol={item.currencySymbol}
									width="w-auto"
									coloredButton={true}
									fontSize="text-sm"
								/>
							</div>
							<ProductAddToCart
								resourceId={item.id}
								withCounter={true}
								margin="m-0"
								size="w-8 h-8"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	)
}
