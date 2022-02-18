import { Image } from 'common/Image';
import { ProductAddToCart } from 'components/ProductCard';
import { IconLabelButton } from 'common/IconLabelButton';
import { FaRegHeart } from 'react-icons/fa';
import { Ribbon } from 'common/Ribbon';
import { ErrorBoundary } from 'modules/errors';
import { Badge } from 'antd';
// import Parser from 'html-react-parser';

const ProductCard = ({ data }: any) => {
  const { name, description, priceValue, currencyCode, image, isNew } = data;

  var resource_description = description
    ? description.length > 60
      ? `${description.slice(0, 60)}...`
      : description
    : '';

  // !!!TODO: use parser or some method to make all description as object xml
  // var resource_description = description ? Parser(`${description}`) : ""
  // resource_description = resource_description.length > 60 ? `${resource_description.slice(0, 60)}...` : resource_description

  return (
    <ErrorBoundary>
      <div className="grid items-center grid-cols-1 mt-4 bg-white rounded grid-rows-Card w-60 h-Card shadow-ResGroupShadow">
        <div className="relative w-56 h-56 mx-auto my-3 bg-gray-200">
          <Badge.Ribbon
            text="50%"
            placement="start"
            className="cursor-default top-DiscountRibbon"
            color="gold"
          >
            {isNew ? <Ribbon /> : null}
            <Image
              src={image}
              alt={`${name} - ${resource_description}`}
              className="object-cover object-center w-full h-full lg:w-full lg:h-full"
            />

            <span className="absolute top-0 right-0">
              <IconLabelButton
                className="relative bottom-0 right-0 float-right mt-2 mb-2 mr-2 bg-white border border-white rounded-md shadow-sm h-9 w-9 "
                icon={
                  <FaRegHeart className="w-6 h-full mx-auto my-0 text-red-500" />
                }
              />
            </span>
            <span className="absolute bottom-0 right-0">
              <ProductAddToCart resourceId={data.id} />
            </span>
          </Badge.Ribbon>
        </div>
        <div className="mx-auto my-0 text-center">
          <h3 className="mx-auto my-0">{name}</h3>
          <hr className="w-full" />
        </div>
        <p className="mx-4 mb-2 text-sm text-justify">{resource_description}</p>
        <h3 className="w-auto px-3 mx-auto my-0 rounded-full navbarColor">
          {priceValue} {currencyCode}
        </h3>
      </div>
    </ErrorBoundary>
  );
};

export default ProductCard;
