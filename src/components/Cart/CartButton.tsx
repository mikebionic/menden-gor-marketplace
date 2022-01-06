import {
  ShoppingBagIcon,
} from '@heroicons/react/outline';

import { connect } from 'react-redux';
import { getTotalCount } from 'sapredux/selectors'


const CartButton = (props: any) => {
	const { cartOpen, setCartOpen, totalCount } = props
	return (
		<a
			className="flex items-center p-2 -m-2 group"
			onClick={() => setCartOpen(!cartOpen)}
		>
			<ShoppingBagIcon
				className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
				aria-hidden="true"
			/>
			<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
				{totalCount}
			</span>
			<span className="sr-only">items in cart, view bag</span>
		</a>
	)
}

const mapStateToProps = (state: any) => {
  return {
    totalCount: getTotalCount(state)
  };
};

export default connect(mapStateToProps)(CartButton);
