
import { handleImageError, handleLoadingImage } from 'modules/errors'

const ProductCard = ({data, onAddedToCart}: any) => {
  const { name, description, priceValue, currencyCode, image } = data
	return (
		<div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src={image}
					alt={`${name} - ${description}`}
					onLoad={handleLoadingImage}
					onError={handleImageError}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{priceValue} {currencyCode}</p>
      </div>
      <button
        onClick={onAddedToCart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to cart
      </button>
    </div>
	)
}

export default ProductCard