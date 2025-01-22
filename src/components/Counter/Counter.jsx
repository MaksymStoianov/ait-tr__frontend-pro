import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const onPlusClick = () => setCount(count => count + 1);
	const onMinusClick = () => setCount(count => count - 1);

	return (
		<div className="counter-wrapper">
			<div className="button-wrapper">
				<Button name="-" type="button" onClick={onMinusClick} />
			</div>
			<div className="result-container">{count}</div>
			<div className="button-wrapper">
				<Button name="+" type="button" onClick={onPlusClick} />
			</div>
		</div>
	);
};

export default Counter;
