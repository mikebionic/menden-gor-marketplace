import { ErrorBoundary } from 'modules/errors'

import { Image } from 'common/Image'
import { StarRate } from 'common/StarRate'
import { PriceButton } from 'common/PriceButton'
import { ProductAddToCart } from 'components/ProductCard'
import { MdClose } from 'react-icons/md'

const styles = {
	isActiveClass:
		'text-firstColorGradientFromDark font-semibold dark:text-darkFirstColor cursor-pointer border-b-2 border-firstColorGradientFromDark dark:border-darkFirstColor hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor pb-2',
	defaultClass:
		'cursor-pointer text-[#C4C4C4] hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor',
}

const MobileWishlistPage = ({ data }: any) => {
	return (
		<ErrorBoundary>
			<div className="grid grid-flow-row gap-4 pt-4 auto-rows-max">
				{data.map(
					(
						{
							id,
							name,
							description,
							image,
							priceValue,
							ratingValue,
							discount,
							realPrice,
							discountValue,
							currencySymbol,
						}: any,
						idx: number,
					) => (
						<ErrorBoundary key={idx}>
							<div className="relative grid grid-cols-[auto_1fr] h-auto items-center gap-2 w-full h-28 p-2 rounded-md bg-fullwhite dark:bg-darkComponentColor shadow-defaultShadow">
								<MdClose className="absolute text-base text-gray-400 top-2 right-2" />
								<div className="w-20 h-20 bg-gray-200 dark:bg-darkBgColor">
									<Image
										src={image}
										alt={`${name} - ${description}`}
										className="object-contain object-center w-full h-full"
									/>
								</div>
								<div className="grid grid-flow-row gap-1 auto-rows-max">
									<div>
										<h1 className="font-bold text-center text-black text-gradient">
											{name}
										</h1>
										<div className="grid grid-flow-col gap-2 auto-cols-max">
											<StarRate
												className="px-0"
												starSize="text-[9px]"
												value={4}
											/>
											{/* <p className="text-base text-[#6B6B6B] cursor-default">
                      100 Teswir
                    </p> */}
										</div>
									</div>
									<div
										className={`grid grid-flow-col pt-1 auto-cols-max items-center border-t border-gray-300 dark:border-darkFirstColor ${
											discount ? 'justify-between' : 'justify-between'
										}`}
									>
										<div className="mx-4 text-sm text-justify">
											<PriceButton
												priceValue={priceValue}
												currencySymbol={currencySymbol}
												width="w-auto"
												coloredButton={true}
												fontSize="text-sm"
											/>
										</div>
										<ProductAddToCart
											resourceId={id}
											withCounter={true}
											margin="m-0"
											size="w-8 h-8"
										/>
									</div>
								</div>
							</div>
						</ErrorBoundary>
					),
				)}
			</div>
		</ErrorBoundary>
	)
}
export default MobileWishlistPage
