import "./styles.css";

function Product(props) {
	const { name, price } = props;

	return (
		<div className="product-container">
			{/* Название продукта */}
			<h3>{name}</h3>
			{/* Цена */}
			<div>
				<b>Price</b>: {price}
			</div>
		</div>
	);
}

export default Product;
