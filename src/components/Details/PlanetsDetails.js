import { useParams } from 'react-router-dom'

const PlanetDetails = (props) => {

	const planetName = useParams()
	// Filters planets to match passed useparams to display correct information
	const planet = props.planets.filter(planet => planet.name === planetName.id)
	const p = planet[0]
	// Filters and maps planet films URLS to match and display
	const planetFilms = props.films.filter(film =>
		p.films.includes(film.url)).map((film, i) => {
			return (
				<li key={i}>
					{film.title}
				</li>
			)
		})
	// Filters and maps planet's residents URLS to match
	const planetResidents = props.swapiPeople.filter(people => p.residents.includes(people.url)).map((people, i) => {
		return (
			<li key={i}>
				{people.name}
			</li>
		)
	})

	return (
		<div className="container2">
			<h1>Name: {p.name}</h1>
			<h3>Rotation Period: {p.rotation_period}</h3>
			<h3>Orbital Period: {p.orbital_period}</h3>
			<h3>Diameter: {p.diameter}</h3>
			<h3>Climate: {p.climate}</h3>
			<h3>Gravity: {p.gravity}</h3>
			<h3>Terrain: {p.terrain}</h3>
			<h3>Surface Water: {p.surface_water}</h3>
			<h3>Population: {p.population}</h3>
			<h3>Featured in Films:
				{planetFilms.length > 0 ?
				<ul>
					{planetFilms}
				</ul>
				: " None"}
			</h3>
			<h3>Residents:
				{planetResidents.length > 0 ?
				<ul>
					{planetResidents}
				</ul>
				: " Unknown"}
			</h3>
		</div>
	)
}

export default PlanetDetails