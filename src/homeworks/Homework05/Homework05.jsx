import Product from "../../components/Product/Product";
import data from "./data.js";
import "./styles.css";

const Homework05 = () => {
	const products = data.map(product => (
		<Product key={product.id} {...product} />
	));

	return <div className="homework05-wrapper">{products}</div>;
};

export default Homework05;
