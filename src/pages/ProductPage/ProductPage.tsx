import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { ErrorBoundary } from 'modules/errors'
import { Divider } from 'components/Divider'
import { fetchResourceById } from 'sapredux/actions'
import { getResourceById } from 'sapredux/selectors'
import { Image } from 'common/Image'
import SlickSlider from 'common/SlickSlider'
import { ProductAddToCart, ProductCard } from 'components/ProductCard'
import { StarRate } from 'common/StarRate'
import { PriceButton } from 'common/PriceButton'

import { ImEye } from 'react-icons/im'
import { WishlistButton } from 'common/WishlistButton'
import { ProductInfoTabs } from 'components/ProductInfoTabs'
import { useTranslation } from 'react-i18next'
import { otherService } from 'sapredux/services'

const RenderProuct = ({
	id,
	description,
	name,
	image,
	filePathM,
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
			<div className="grid gap-8 3xl:gap-20 p-4 3xl:p-12 mx-auto my-8 grid-cols-[auto_1fr] lg:w-[auto] h-[450px] 3xl:h-[600px] bg-fullwhite dark:bg-darkComponentColor place-content-center place-items-center">
				<div className="bg-gray-200 dark:bg-darkBgColor lg:w-96 md:w-80 lg:h-96 md:h-80 3xl:w-[35rem] 3xl:h-[30rem]">
					<Image
						src={filePathM}
						alt={`${name} - ${description}`}
						className="object-contain object-center w-full h-full lg:w-full lg:h-full"
					/>
				</div>
				<div className="inline-grid lg:gap-2 3xl:gap-4 md:gap-1 grid-flow-rows auto-rows-max place-items-stretch">
					<div>
						<h1 className="py-4 font-bold text-center text-black lg:text-3xl md:text-2xl 3xl:text-4xl text-gradient">
							{name}
						</h1>
						<p className="py-1 font-medium text-black lg:text-xl 3xl:text-3xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
							{t('common.category')}: {categoryName}
						</p>
						<p className="py-1 font-medium text-black lg:text-xl 3xl:text-3xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
							{t('common.price')}: {priceValue} {currencySymbol}
						</p>
						<p className="py-1 font-medium text-black lg:text-xl 3xl:text-3xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
							{t('common.quantity')}: {totBalance}
						</p>
						<p className="py-1 font-medium text-black lg:text-xl 3xl:text-3xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
							{description}
						</p>
					</div>
					<div className="grid grid-flow-col gap-4 auto-cols-max">
						<StarRate
							className="px-0"
							starSize="3xl:text-xl"
							value={ratingValue}
						/>
						{/* <p className="text-base text-[#6B6B6B] cursor-default">
          100 Teswir
        </p> */}
						<div className="inline-grid grid-flow-col gap-1 cursor-default 3xl:gap-3 auto-cols-max place-content-center place-items-center dark:text-darkTextWhiteColor">
							<ImEye className="text-xl 3xl:text-3xl text-textColorOrange dark:text-darkFirstColor" />
							<p className="text-base 3xl:text-2xl">{viewCnt}</p>
						</div>
					</div>
					{discount && (
						<p className="text-base text-justify text-gray-400 line-through 3xl:text-3xl">
							{realPrice} {currencySymbol}
						</p>
					)}
					<div className="w-32 3xl:w-auto 3xl:max-w-[15rem]">
						<PriceButton
							priceValue={priceValue}
							currencySymbol={currencySymbol}
							coloredButton={false}
							width="w-full"
							padding="p-3"
							fontSize="text-base 3xl:text-3xl"
						/>
					</div>
					<hr className="w-auto lg:my-4 md:my-2" />
					<div className="inline-grid grid-flow-col gap-4 auto-cols-max place-content-end place-items-center">
						<div className="">
							<ProductAddToCart
								resourceId={id}
								withCounter={true}
								margin="m-0"
							/>
						</div>
						<div>
							<WishlistButton wishlist={wishlist} margin="m-0" />
						</div>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const ProductPage: React.FC = (props: any) => {
	const { fetchResourceById, resource } = props
	const { t } = useTranslation()
	const params: any = useParams()
	useEffect(() => {
		try {
			fetchResourceById(parseInt(params.id))
		} catch (err: any) {
			console.log(err)
		}
	}, [params.id, fetchResourceById])

	useEffect(() => {
		if (resource) {
			otherService.request_view_counter({
				ResGuid: btoa(resource.guid),
				ResRegNo: btoa(resource.regNo),
			})
		}
	}, [resource])

	let slidesToShow =
		window.innerWidth > 1800
			? 6
			: window.innerWidth > 1500
			? 5
			: window.innerWidth > 1000
			? 4
			: window.innerWidth > 700
			? 3
			: 2

	const productsList =
		resource && resource.related_resources && !!resource.related_resources ? (
			<SlickSlider settings={{ slidesToShow: slidesToShow }}>
				{resource.related_resources.map((resource: any, idx: number) => (
					<ProductCard key={idx} data={resource} />
				))}
			</SlickSlider>
		) : null

	return (
		<ErrorBoundary>
			<div className="py-8">
				<RenderProuct {...resource} />
				<ProductInfoTabs {...resource} />
				<Divider title={t('common.similar_products')} />
				{productsList}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
