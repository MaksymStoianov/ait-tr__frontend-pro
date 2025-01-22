import "./styles.css";

const Input = props => {
	const { name, type = "text", placeholder, label } = props;

	return (
		<label className="main-input">
			<span>{label}</span>
			<input type={type} name={name} placeholder={placeholder} />
		</label>
	);
};

export default Input;
