import { lessonData } from "./data";
import "./styles.css";

function ProfileCard() {
	return (
		<div className="profile-card-wrapper">
			<img className="avatar" src={lessonData.avatar} />
			<div>
				<div className="name">
					<b>Имя и фамилия</b>: {lessonData.first_name} {lessonData.last_name}
				</div>
				<div className="occupation">
					<b>Род деятельности</b>: {lessonData.occupation}
				</div>
				<div className="hobby">
					<b>Хобби</b>:{" "}
					{lessonData.hobby.map((item, i) => {
						return (
							<span key={i} className="item">
								{item}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
