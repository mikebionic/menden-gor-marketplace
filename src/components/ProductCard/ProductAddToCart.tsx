

import { AddToCartButton } from 'common/AddToCartButton'
import { getTotalCount } from 'sapredux/selectors';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
  resourceAddedToCart,
  resourceRemovedFromCart,
  resourceAllRemovedFromCart,
} from 'sapredux/actions'


const ProductAddToCart = ({onIncrease, onDecrease, totalCount, totalPrice}: any) => {

	return (
		<>
			hello
		</>
		// <AddToCartButton
		// 	onIncrease={() => onIncrease(data.id)}
		// 	onDecrease={() => onDecrease(data.id)}
		// 	count={totalCount || 0}
		// />

	)
}

const mapStateToProps = (state: any) => {
  const totalData = getTotalCount(state)
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