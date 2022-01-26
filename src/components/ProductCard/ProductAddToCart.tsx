
import { AddToCartButton } from 'common/AddToCartButton'
import { getTotalCount } from 'sapredux/selectors';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
  resourceAddedToCart,
  resourceRemovedFromCart,
  resourceAllRemovedFromCart,
} from 'sapredux/actions'


const ProductAddToCart = ({resourceId, onIncrease, onDecrease, totalCount, totalPrice}: any) => {

	return (
		<AddToCartButton
			onIncrease={() => onIncrease(resourceId)}
			onDecrease={() => onDecrease(resourceId)}
			count={totalCount || 0}
		/>
	)
}

const mapStateToProps = (state: any, props: any) => {
	const { resourceId } = props;
  const totalData = getTotalCount(state, resourceId)
  return {
    totalCount: totalData.totalCount,
    totalPrice: totalData.totalPrice,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onIncrease: resourceAddedToCart,
    onDecrease: resourceRemovedFromCart,
    onDelete: resourceAllRemovedFromCart
  }, dispatch);
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps,
)(ProductAddToCart);