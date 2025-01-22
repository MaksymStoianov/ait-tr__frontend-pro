import "./styles.css";

function Button(props) {
	const { name = "SEND", type = "submit", onClick } = props;

	return (
		<button className="main-button" type={type} onClick={onClick}>
			{name}
		</button>
	);
}

export default Button;
