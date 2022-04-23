import { ProductCard } from 'components/ProductCard'
import { MobileProductCard } from 'mobile/components/MobileProductCard'

interface IPropsProductList {
	gridClassName?: string
	data?: any
}

const mobile = window.innerWidth < 768 ? true : false

export const ProductList: React.FC<IPropsProductList> = ({
	data,
	gridClassName = 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5',
}) => {
	return (
		<div
			className={`grid gap-8 mt-6 gap-x-6 ${gridClassName}  lg:gap-4 min-phone:gap-2 xl:gap-x-8 place-items-center`}
		>
			{data.map((resource: any, idx: number) =>
				mobile ? (
					<MobileProductCard key={idx} data={resource} />
				) : (
					<ProductCard key={idx} data={resource} />
				),
			)}
		</div>
	)
}
