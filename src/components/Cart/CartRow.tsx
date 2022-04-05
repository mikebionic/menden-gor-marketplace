import { Link } from 'react-router-dom';
import { Image } from 'common/Image';
import { routeConstants } from 'navigation';
import { ProductAddToCart } from 'components/ProductCard';
import { AiOutlineDelete } from 'react-icons/ai';

export const CartRow = ({ item, onIncrease, onDecrease, onDelete }: any) => {
  return (
    item && (
      <div className="flex py-6">
        <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover object-center w-full h-full"
          />
        </div>

        <div className="flex flex-col flex-1 ml-4">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <Link
                  to={`${routeConstants.product.route}${item.id}/${item.name}`}
                  className="text-black hover:text-gray-600"
                >
                  {item.name}
                </Link>
              </h3>
              <p className="ml-4">
                {item.priceValue} {item.currencySymbol}
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
          <div className="flex items-end justify-between flex-1 mt-4 text-sm">
            <div className="flex w-full h-full">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => onDelete(item.id)}
              >
                <AiOutlineDelete className="w-7 h-7 text-secondColorGradientToLight hover:text-socialBarItemHover" />
              </button>
            </div>
            <ProductAddToCart resourceId={item.id} withCounter={true} />
          </div>
        </div>
      </div>
    )
  );
};
