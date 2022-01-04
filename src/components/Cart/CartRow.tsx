
export const CartRow = (product: any, idx: number) => {
	const { id, title, count, total } = product;
	return (
		<li key={product.id} className="py-6 flex">
			<div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="w-full h-full object-center object-cover"
				/>
			</div>

			<div className="ml-4 flex-1 flex flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<a href={product.href}>{product.name}</a>
						</h3>
						<p className="ml-4">{product.price}</p>
					</div>
					<p className="mt-1 text-sm text-gray-500">{product.color}</p>
				</div>
				<div className="flex-1 flex items-end justify-between text-sm">
					<p className="text-gray-500">Qty {product.quantity}</p>

					<div className="flex">
						<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};
{/* <tr key={id}>
	<td>{idx + 1}</td>
	<td>{title}</td>
	<td>{count}</td>
	<td>${total}</td>
	<td>
		<button
			onClick={() => onDelete(id)}
			className="btn btn-outline-danger btn-sm float-right">
			<i className="fa fa-trash-o" />
		</button>
		<button
			onClick={() => onIncrease(id)}
			className="btn btn-outline-success btn-sm float-right">
			<i className="fa fa-plus-circle" />
		</button>
		<button
			onClick={() => onDecrease(id)}
			className="btn btn-outline-warning btn-sm float-right">
			<i className="fa fa-minus-circle" />
		</button>
	</td>
</tr> */}

