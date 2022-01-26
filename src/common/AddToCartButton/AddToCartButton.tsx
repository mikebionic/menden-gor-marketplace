export const AddToCartButton = ({onIncrease, onDecrease, count}: any) => {
	
	const OnlyButton = () => (
		<button
			onClick={onIncrease}
			className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Add to cart
		</button>
	)
	const CountButtons = () => (
		<div className="row flex">
			<button onClick={onDecrease}
				className="bg-blue-200 hover:bg-blue-700 rounded">
				-
			</button>
			<p>{count}</p>
			<button onClick={onIncrease}
				className="bg-blue-200 hover:bg-blue-700 rounded">
				+
			</button>
		</div>
	)
	return (
		<div>
			{ count > 0 ? <CountButtons /> : <OnlyButton /> }
		</div>
	)
}