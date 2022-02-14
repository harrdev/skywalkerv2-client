import { useParams } from 'react-router-dom'

const PlanetDetails = (props) => {
	const planetName = useParams()
	// Filters planets to match passed useparams to display correct information
	const planet = props.planets.filter(planet => planet.name === planetName.name)
	const p = planet[0]
	// Filters and maps planet resident URLS to match and display
	// const planetResidents = props.people.filter(person => p.residents.includes(person.homeworld))
	// .map((person, i) =>  {
	// 	return ( 
	// 	<li key={i}>
	// 		{person.name}
	// 	</li>
	// 	)
	// })

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
			{/* <h3>Residents: 
				<ul>
					{planetResidents}
				</ul>
			</h3> */}
		</div>
	)
}

export default PlanetDetails