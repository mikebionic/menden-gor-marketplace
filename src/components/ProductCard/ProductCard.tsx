
const ProductCard = ({name, price, image}: any) => {
	return (
		<div className="card">
			<div className="con-image">
				<img className="img" src={image} alt="product " />
			</div>

			<div className="product_information">
				<div className="con-text">
				<h3>
					<a href='#'>
						{name}
					</a>
				</h3>
			</div>

			<div className="con-price">
				{price}
			</div>
			

			{/* <div className="con-btn">
				<button className="add">
					Add to cart
				</button>
			</div>
			 */}
			</div>
		</div>
	)
}

export default ProductCard