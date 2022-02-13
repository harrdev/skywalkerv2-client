import { useParams } from 'react-router-dom'

const PlanetDetails = (props) => {

	const planetName = useParams()

	const planet = props.planets.filter(planet => planet.name === planetName.name)
	console.log("Matched planet data: ", planet)
	const p = planet[0]
	return (
		<div className="details">
			<h2>Planet Details Page</h2>
			<h3>Name: {p.name}</h3>
			<h3>Rotation Period: {p.rotation_period}</h3>
			<h3>Orbital Period: {p.orbital_period}</h3>
			<h3>Diameter: {p.diameter}</h3>
			<h3>Climate: {p.climate}</h3>
			<h3>Gravity: {p.gravity}</h3>
			<h3>Terrain: {p.terrain}</h3>
			<h3>Surface Water: {p.surface_water}</h3>
			<h3>Population: {p.population}</h3>
		</div>
	)
}

export default PlanetDetails