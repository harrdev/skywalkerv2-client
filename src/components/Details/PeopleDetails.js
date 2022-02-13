import { useParams } from 'react-router-dom'

const PeopleDetails = (props) => {

	const personName = useParams()
	const person = props.people.filter(person => person.name === personName.name)
	const p = person[0]

	// filter through planets to match url to people's homeworld url
	// const personsHomeworld = props.planets.filter(homeworld => p.homeworld.includes(homeworld.url))
	// const filterHomeworld = personsHomeworld[0].name

	return (
		<div className="details">
			<h2>People Details Page</h2>
			<h3>Name: {p.name}</h3>
			<h3>Gender: {p.gender}</h3>
			<h3>Species: {p.species}</h3>
			<h3>Birth Year {p.born}</h3>
			<h3>Death Year: {p.died}</h3>
			<h3>Death Location: {p.diedLocation}</h3>
			<h3>Height: {p.height} cm</h3>
			<h3>Eye Color: {p.eyeColor}</h3>
			<h3>Hair Color: {p.hairColor}</h3>
			<h3>Weight: {p.mass} kg</h3>
			<h3>Skin Color: {p.skinColor}</h3>
			<h3>Born Location: {p.bornLocation}</h3>
			<h3>Homeworld: {p.homeworld}</h3>
			<div>
				<img src={p.image} height="340" width="250"></img>
			</div>
		</div>
	)
}

export default PeopleDetails