import { AddToCartButton, AddToCartWithCounter } from 'common/AddToCartButton';
import { getTotalCount } from 'sapredux/selectors';
import { ErrorBoundary } from 'modules/errors'

import { connect } from 'react-redux';

import {
  resourceAddedToCart,
  resourceRemovedFromCart,
  resourceAllRemovedFromCart,
} from 'sapredux/actions';

const ProductAddToCart = ({
  resourceId,
  withCounter = false,
  onIncrease,
  onDecrease,
  totalCount,
  totalPrice,
  onDelete,
  ...props
}: any) => (
  <ErrorBoundary>
    {
      withCounter ? (
        <AddToCartWithCounter
          onIncrease={() => onIncrease(resourceId)}
          onDecrease={() => onDecrease(resourceId)}
          count={totalCount || 0}
          {...props}
        />
      ) : (
        <AddToCartButton
          onIncrease={() => onIncrease(resourceId)}
          count={totalCount || 0}
          onDelete={() => onDelete(resourceId)}
          {...props}
        />
      )
    }
  </ErrorBoundary>
)

const mapStateToProps = (state: any, props: any) => {
  const { resourceId } = props;
  const totalData = getTotalCount(state, resourceId);
  return {
    totalCount: totalData.totalCount,
    totalPrice: totalData.totalPrice,
  };
};

const mapDispatchToProps = {
  onIncrease: resourceAddedToCart,
  onDecrease: resourceRemovedFromCart,
  onDelete: resourceAllRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddToCart);