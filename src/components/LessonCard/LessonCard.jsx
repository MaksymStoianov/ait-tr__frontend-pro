import Button from "../Button/Button";
import { lessonData } from "./data";
import "./styles.css";

function LessonCard() {
	console.log(lessonData);

	return (
		<div className="lesson-card-wrapper">
			<img src={lessonData.lesson_img} />
			<h3>Lesson {lessonData.lesson_number}</h3>
			<div>
				<b>Topic</b>: {lessonData.topic}
			</div>
			<div>
				<b>Teacher</b>: {lessonData.teacher_name}
			</div>
			<Button />
		</div>
	);
}

export default LessonCard;
