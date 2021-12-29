
import { ProductCard } from "components/ProductCard"

export const ProductList = ({data, onAddedToCart}: any) => {

	return (
		<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{
				data.map((resource: any, id: number) => (
					<ProductCard key={id} 
						data={resource}
						onAddedToCart={() => onAddedToCart(resource.id)} />
				))
			}
		</div>
	)
}
