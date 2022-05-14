import React, { useEffect } from 'react'

import { ErrorBoundary } from 'modules/errors'
import { ProductInfoTabs } from 'components/ProductInfoTabs'
import { connect } from 'react-redux'
import { fetchResourceById } from 'sapredux/actions'
import { getResourceById } from 'sapredux/selectors'
import { useParams } from 'react-router-dom'
import { PriceButton } from 'common/PriceButton'
import { ProductAddToCart } from 'components/ProductCard'
import { WishlistButton } from 'common/WishlistButton'
import { ImEye } from 'react-icons/im'
import { StarRate } from 'common/StarRate'
import { Image } from 'common/Image'
import { MobileProductCard } from 'mobile/components/MobileProductCard'
import SlickSlider from 'common/SlickSlider'
import { useTranslation } from 'react-i18next'

const RenderProuct = ({
	id,
	description,
	name,
	image,
	priceValue,
	currencySymbol,
	categoryName,
	totBalance,
	realPrice,
	wishlist,
	viewCnt,
	ratingValue,
	discount,
}: any) => {
	const { t } = useTranslation()
	return (
		<ErrorBoundary>
			<div className="grid gap-3 mx-auto grid-flow-row auto-rows-max h-[auto] place-content-center place-items-center">
				<div className="bg-gray-200 dark:bg-darkBgColor">
					<Image
						src={image}
						alt={`${name} - ${description}`}
						className="object-contain object-center w-full h-full lg:w-full lg:h-full"
					/>
				</div>
				<div className="inline-grid gap-1 grid-flow-rows auto-rows-max place-items-stretch">
					<div>
						<h1 className="py-4 font-bold text-center text-black text-gradient">
							{name}
						</h1>
						<p className="py-1 font-medium text-black place-self-start dark:text-darkTextWhiteColor">
							{t('common.category')}: {categoryName}
						</p>
						<p className="py-1 font-medium text-black place-self-start dark:text-darkTextWhiteColor">
							{t('common.price')}: {priceValue} {currencySymbol}
						</p>
						<p className="py-1 font-medium text-black place-self-start dark:text-darkTextWhiteColor">
							{t('common.quantity')}: {totBalance}
						</p>
						<p className="py-1 font-medium text-black place-self-start dark:text-darkTextWhiteColor">
							{description}
						</p>
					</div>
					<div className="grid grid-flow-col gap-4 auto-cols-max">
						<StarRate className="px-0" starSize="text-sm" value={ratingValue} />
						{/* <p className="text-base text-[#6B6B6B] cursor-default">
          100 Teswir
        </p> */}
						<div className="inline-grid grid-flow-col gap-1 cursor-default place-items-center auto-cols-max place-content-center dark:text-darkTextWhiteColor">
							<ImEye className="text-sm text-textColorOrange dark:text-darkFirstColor" />
							<p className="text-sm">{viewCnt}</p>
						</div>
					</div>
					<div className="grid grid-flow-col auto-cols-max place-items-center">
						{discount && (
							<p className="text-base text-justify text-gray-400 line-through">
								{realPrice} {currencySymbol}
							</p>
						)}
						<div className="w-32">
							<PriceButton
								priceValue={priceValue}
								currencySymbol={currencySymbol}
								coloredButton={true}
								width="w-full"
								padding="p-0"
								fontSize="text-lg"
							/>
						</div>
					</div>
					<hr className="w-auto" />
					<div className="inline-grid grid-flow-col gap-4 auto-cols-max place-content-end place-items-center">
						<div className="">
							<ProductAddToCart
								resourceId={id}
								withCounter={true}
								margin="m-0"
								size="rounded-full"
							/>
						</div>
						<div>
							<WishlistButton wishlist={wishlist} margin="m-0" size="w-9 h-9" />
						</div>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const MobileProductPage = (props: any) => {
	const { fetchResourceById, resource } = props

	const params: any = useParams()
	useEffect(() => {
		try {
			fetchResourceById(parseInt(params.id))
		} catch (err: any) {
			console.log(err)
		}
	}, [params.id, fetchResourceById])

	const productsList =
		resource && resource.related_resources && !!resource.related_resources ? (
			<SlickSlider settings={{ slidesToShow: 2 }}>
				{resource.related_resources.map((resource: any, idx: number) => (
					<MobileProductCard key={idx} data={resource} />
				))}
			</SlickSlider>
		) : null

	return (
		<ErrorBoundary>
			<div className="">
				<RenderProuct {...resource} />
				{productsList}
				<ProductInfoTabs {...resource} />
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	resource: getResourceById(state.resource.data, state.resourcePage.id),
})

const mapDispatchToProps = {
	fetchResourceById,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileProductPage)
