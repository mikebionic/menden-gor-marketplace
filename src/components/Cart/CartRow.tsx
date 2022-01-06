import { Link } from 'react-router-dom'
import { Image } from 'common/Image'

export const CartRow = ({item, onIncrease, onDecrease, onDelete}: any) => {
	return (
		<li className="py-6 flex">
			<div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
				<Image
					src={item.image}
					alt={item.name}
					className="w-full h-full object-center object-cover"
				/>
			</div>

			<div className="ml-4 flex-1 flex flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<Link to={item.name}>{item.name}</Link>
						</h3>
						<p className="ml-4">{item.priceValue} {item.currencyCode}</p>
					</div>
					<p className="mt-1 text-sm text-gray-500">{item.description}</p>
				</div>
				<div className="flex-1 flex items-end justify-between text-sm">
					<p className="text-gray-500">Qty {item.count}</p>

					<div className="flex">
						<button type="button"
							className="font-medium text-indigo-600 hover:text-indigo-500"
							onClick={() => onDelete(item.id)}>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};