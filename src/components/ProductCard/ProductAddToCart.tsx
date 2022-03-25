import { AddToCartButton, AddToCartWithCounter } from 'common/AddToCartButton';
import { getTotalCount } from 'sapredux/selectors';
import { ErrorBoundary } from 'modules/errors'

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
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
}: any) => (
  <ErrorBoundary>
    {
      withCounter ? (
        <AddToCartWithCounter
          onIncrease={() => onIncrease(resourceId)}
          onDecrease={() => onDecrease(resourceId)}
          count={totalCount || 0}
          // coloredCountry={true}
        />
      ) : (
        <AddToCartButton
          onIncrease={() => onIncrease(resourceId)}
          count={totalCount || 0}
          onDelete={() => onDelete(resourceId)}
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

const mapDispatchToProps = (dispatch: any) => 
  bindActionCreators(
    {
      onIncrease: resourceAddedToCart,
      onDecrease: resourceRemovedFromCart,
      onDelete: resourceAllRemovedFromCart,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddToCart);
