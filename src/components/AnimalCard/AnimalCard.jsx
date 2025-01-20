import "./styles.css";

function AnimalCard(props) {
	const { children, animalName, animalSpecies, animalImg } = props;

	return (
		<div className="animal-card-wrapper">
			<div className="card-info">
				<h3>{animalName}</h3>
				<div>{animalSpecies}</div>
				{children}
			</div>
			<img src={animalImg} className="card-image" />
		</div>
	);
}

export default AnimalCard;
