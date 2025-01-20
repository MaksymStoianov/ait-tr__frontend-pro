import "./styles.css";

function Button(props) {
	const { name = "SEND" } = props;
	const buttonType = "submit";

	return (
		<button className="main-button" type={buttonType}>
			{name}
		</button>
	);
}

export default Button;
