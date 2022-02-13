import { useParams } from "react-router-dom";

const StarshipDetails = (props) => {

    const starshipName = useParams()
	const starshipData = props.starships.filter(starship => starship.name === starshipName.name)
	const s = starshipData[0]

	return (
		<div className="details">
			<h2>Starship Details Page</h2>
			<h3>Name: {s.name}</h3>
			<h3>Model: {s.model}</h3>
			<h3>Manufacturer: {s.manufacturer}</h3>
			<h3>Cost in Credits: {s.cost_in_credits}</h3>
			<h3>Length: {s.length}</h3>
			<h3>Max Speed: {s.max_atmosphering_speed}</h3>
			<h3>Crew: {s.crew}</h3>
			<h3>Passengers: {s.passengers}</h3>
			<h3>Cargo Capacity: {s.cargo_capacity}</h3>
			<h3>Consumables: {s.consumables}</h3>
			<h3>Hyperdrive Rating: {s.hyperdrive_rating}</h3>
			<h3>MGLT: {s.mglt}</h3>
			<h3>Starship Class: {s.starship_class}</h3>

		</div>
	)
}

export default StarshipDetails