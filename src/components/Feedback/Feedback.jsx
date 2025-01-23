import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback(props) {
	const { children } = props;

	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);

	const incrementLikes = () => {
		setLikes(likes => likes + 1);
	};

	const incrementDislikes = () => {
		setDislikes(dislikes => dislikes + 1);
	};

	const reset = () => {
		setLikes(() => 0);
		setDislikes(() => 0);
	};

	return (
		<div className="flex-col">
			<div className="flex-row">
				<div className="button-like-container flex-row">
					<span>{likes}</span>
					<Button onClick={incrementLikes}>Like</Button>
				</div>
				<div className="button-dislike-container flex-row">
					<Button onClick={incrementDislikes}>Dislike</Button>
					<span>{dislikes}</span>
				</div>
			</div>
			<Button onClick={reset}>Reset Results</Button>
			{children}
		</div>
	);
}

export default Feedback;
