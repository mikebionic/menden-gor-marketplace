// import {
//   ShoppingBagIcon,
// } from '@heroicons/react/outline';

import { RiShoppingBasketLine } from 'react-icons/ri';
import { IconLabelButton } from 'common/IconLabelButton';
import { connect } from 'react-redux';
import { getTotalCount } from 'sapredux/selectors'


const CartButton = (props: any) => {
	const { cartOpen, setCartOpen, totalCount, totalPrice } = props
	return (
		<>
			<a className="flex flex-row-reverse mr-1"
				onClick={() => setCartOpen(!cartOpen)}>
				<IconLabelButton
					className="items-center grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid h-1/3 "
					icon={
						<RiShoppingBasketLine className="w-6 h-6 mx-3 text-2xl text-white" />
					}
				/>
				<span className="absolute text-sm font-semibold text-white ">
					{totalCount}
				</span>
			</a>
			<div className="mt-3 text-sm font-semibold text-white ">
				{totalPrice} TMT
			</div>
		</>
	)
}

const mapStateToProps = (state: any) => {
	const totalData = getTotalCount(state)
  return {
		totalCount: totalData.totalCount,
		totalPrice: totalData.totalPrice,
  };
};

export default connect(mapStateToProps)(CartButton);
