import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import { hippoData, lionData, zebraData } from "./data";
import "./styles.css";

function Lesson03() {
	return (
		<div className="lesson03-wrapper">
			<AnimalCard
				animalName={lionData.name}
				animalSpecies={lionData.species}
				animalImg={lionData.image}
			/>
			<AnimalCard
				animalName={zebraData.name}
				animalSpecies={zebraData.species}
				animalImg={zebraData.image}
			>
				<div>Один из главных персонажей</div>
				<Button name="Get more info" />
			</AnimalCard>
			<AnimalCard
				animalName={hippoData.name}
				animalSpecies={hippoData.species}
				animalImg={hippoData.image}
			/>

			<Button name="Send data" />
			<Button name="GET" />
			<Button />
		</div>
	);
}

export default Lesson03;
