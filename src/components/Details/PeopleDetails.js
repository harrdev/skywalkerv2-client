import { useParams } from 'react-router-dom'

const PeopleDetails = (props) => {

	const personName = useParams()
	const person = props.people.filter(person => person.name === personName.name)
	const p = person[0]

	// filter through planets to match url to people's homeworld url
	const personsHomeworld = props.planets.filter(homeworld => p.homeworld.includes(homeworld.url))
	const filterHomeworld = personsHomeworld[0].name

	return (
		<div className="details">
			<h2>People Details Page</h2>
			<h3>Name: {p.name}</h3>
			<h3>Gender: {p.gender}</h3>
			<h3>Birth Year {p.birth_year}</h3>
			<h3>Height: {p.height} cm</h3>
			<h3>Eye Color: {p.eye_color}</h3>
			<h3>Hair Color: {p.hair_color}</h3>
			<h3>Weight: {p.mass} kg</h3>
			<h3>Skin Color: {p.skin_color}</h3>
			<h3>Homeworld: {filterHomeworld}</h3>
		</div>
	)
}

export default PeopleDetails