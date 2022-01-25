import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
  resourceAddedToCart,
  resourceRemovedFromCart,
  resourceAllRemovedFromCart,
} from 'sapredux/actions'

import { Image } from 'common/Image'
import { AddToCartButton } from 'common/AddToCartButton'
import { getTotalCount } from 'sapredux/selectors';

const ProductCard = ({data, onIncrease, onDecrease}: any) => {
  console.log("hahahahaha ", data)
  const { name, description, priceValue, currencyCode, image } = data
  return (
    <div className="relative group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Image
          src={image}
          alt={`${name} - ${description}`}
          className="object-cover object-center w-full h-full lg:w-full lg:h-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={window.location.href}>
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {priceValue} {currencyCode}
        </p>
      </div>
      <AddToCartButton
        onIncrease={() => onIncrease(data.id)}
        onDecrease={() => onDecrease(data.id)}
        count={data.count || 0}
      />

    </div>
  );
};

// const mapStateToProps = (state: any) => {
//   const totalData = getTotalCount(state)
//   return {
//     totalCount: totalData.totalCount,
//     totalPrice: totalData.totalPrice,
//   }
// }

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onIncrease: resourceAddedToCart,
    onDecrease: resourceRemovedFromCart,
    onDelete: resourceAllRemovedFromCart
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps,
)(ProductCard);