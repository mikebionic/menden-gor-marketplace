import { connect } from 'react-redux'
import { CartRow } from 'components/Cart'
import {
	resourceAddedToCart,
	resourceRemovedFromCart,
	resourceAllRemovedFromCart,
} from 'sapredux/actions'
import { getTotalCount, getCartItems } from 'sapredux/selectors'
import { ErrorBoundary } from 'modules/errors'

const CartBody = ({
	items,
	totalCount,
	totalPrice,
	onIncrease,
	onDecrease,
	onDelete,
}: any) => (
	<ErrorBoundary>
		<ul role="list" className="-my-6 divide-y divide-gray-200">
			{items.map((item: any, idx: number) => (
				<li key={idx}>
					<CartRow
						key={idx}
						item={item}
						onIncrease={onIncrease}
						onDecrease={onDecrease}
						onDelete={onDelete}
					/>
				</li>
			))}
		</ul>
	</ErrorBoundary>
)

const mapStateToProps = (state: any) => {
	const totalData = getTotalCount(state)
	return {
		items: getCartItems(state),
		totalCount: totalData.totalCount,
		totalPrice: totalData.totalPrice,
	}
}

const mapDispatchToProps = {
	onIncrease: resourceAddedToCart,
	onDecrease: resourceRemovedFromCart,
	onDelete: resourceAllRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartBody)
