import "./styles.css";

function Button(props) {
	const { name = "SEND", type = "submit" } = props;

	return (
		<button className="main-button" type={type}>
			{name}
		</button>
	);
}

export default Button;
