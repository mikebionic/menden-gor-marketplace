export const AddToCartButton = ({onIncrease}: any) => {
	
	const OnlyButton = () => (
		<button
			onClick={onIncrease}
			className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			+
		</button>
	)

	return (
		<div>
			<OnlyButton />
		</div>
	)
}