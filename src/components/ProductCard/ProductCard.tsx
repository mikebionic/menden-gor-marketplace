import { Link } from 'react-router-dom';
import { Badge } from 'antd';

import { Image } from 'common/Image';
import { ProductAddToCart } from 'components/ProductCard';
import { Ribbon } from 'common/Ribbon';
import { ErrorBoundary } from 'modules/errors';
import { routeConstants } from 'navigation/routeConstants';
import { StarRate } from 'common/StarRate';
import { PriceButton } from 'common/PriceButton';
import { WishlistButton } from 'common/WishlistButton';

const ProductCard = ({ data }: any) => {
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
  } = data;

  var resource_description = description
    ? description.length > 50
      ? `${description.slice(0, 50)}...`
      : description
    : '';

  return (
    <ErrorBoundary>
      <div className="relative grid items-center w-64 grid-cols-1 mt-4 bg-white rounded grid-rows-[max-content_30px_auto_auto_auto] h-[26rem] shadow-defaultShadow">
        <Badge.Ribbon
          text={discount}
          placement="start"
          className={`cursor-default top-[82%] discount-left ${
            discount ?? 'hidden'
          }`}
          color="red"
        >
          <div className="items-center justify-center w-56 h-64 mx-auto my-3 overflow-hidden bg-gray-200 ">
            <div className="relative">
              {isNew ? <Ribbon /> : null}
              <span className="absolute top-0 right-0">
                <WishlistButton resId={id} wishlist={wishlist} />
              </span>
              <span className="absolute right-0 top-52">
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
            <h3 className="mx-auto my-0 font-semibold">{name}</h3>
            <hr className="w-full" />
          </div>
        </Link>

        <p className="mx-4 text-sm text-justify text-gray-400">
          {categoryName}
        </p>
        <StarRate disabled={true} value={ratingValue} />
        <div
          className={`flex items-center py-1 border-t border-gray-300 ${
            discount ? 'justify-between' : 'justify-end'
          }`}
        >
          {discount && (
            <p className="mx-4 text-sm text-justify text-gray-400 line-through">
              {realPrice} {currencySymbol}
            </p>
          )}

          <p className="mx-4 text-sm text-justify">
            <PriceButton
              priceValue={priceValue}
              currencySymbol={currencySymbol}
              width="w-auto"
              coloredButton={true}
            />
          </p>
        </div>
        {/* <p className="mx-4 mb-2 text-sm text-justify">{resource_description}</p> */}
        {/* <h3 className="w-auto px-3 mx-auto my-0 rounded-full bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight">
          {priceValue} {currencySymbol} */}
        {/* </h3> */}
      </div>
    </ErrorBoundary>
  );
};

export default ProductCard;
