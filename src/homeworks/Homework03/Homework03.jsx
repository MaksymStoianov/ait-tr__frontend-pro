import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./styles.css";

function Homework03() {
	return (
		<div className="homework03-wrapper">
			<Input
				name="email"
				type="email"
				placeholder="Enter your email"
				label="Email"
			/>
			<Button name="Send email" />
		</div>
	);
}

export default Homework03;
