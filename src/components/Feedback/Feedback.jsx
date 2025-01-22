import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

const Feedback = props => {
	const { children } = props;

	const [state, setState] = useState({
		likes: 0,
		dislikes: 0,
	});

	const incrementLikes = () => {
		setState(prevState => ({
			...prevState,
			likes: prevState.likes + 1,
		}));
	};

	const incrementDislikes = () => {
		setState(prevState => ({
			...prevState,
			dislikes: prevState.dislikes + 1,
		}));
	};

	const reset = () => {
		setState(prevState => ({
			...prevState,
			likes: 0,
			dislikes: 0,
		}));
	};

	return (
		<div className="flex-col">
			<div className="flex-row">
				<div className="button-like-container flex-row">
					<span>{state.likes}</span>
					<Button onClick={incrementLikes}>Like</Button>
				</div>
				<div className="button-dislike-container flex-row">
					<Button onClick={incrementDislikes}>Dislike</Button>
					<span>{state.dislikes}</span>
				</div>
			</div>
			<Button onClick={reset}>Reset Results</Button>
			{children}
		</div>
	);
};

export default Feedback;
