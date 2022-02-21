import { useParams } from 'react-router-dom'

const PeopleDetails = (props) => {

	const personName = useParams()
	const person = props.people.filter(person => person.name === personName.id)
	const p = person[0]

	const affiliations = p.affiliations.map((a, i) => {
		return (
			<li key={i}>
				{a}
			</li>
		)
	})

	return (
		<div className="container">
			<div className="listLeft">
				<div className="items">
					<h1>Name: {p.name}</h1>
					<h3>Homeworld: {p.homeworld}</h3>
					<h3>Gender: {p.gender}</h3>
					<h3>Species: {p.species}</h3>
					<h3>Height: {p.height} m</h3>
					<h3>Hair Color: {p.hairColor}</h3>
					<h3>Skin Color: {p.skinColor}</h3>
					<h3>Eye Color: {p.eyeColor}</h3>
					<h3>Weight: {p.mass} kg</h3>
					<h3>Birth Year {p.born}</h3>
					<h3>Born Location: {p.bornLocation}</h3>
					<h3>Death Year: {p.died}</h3>
					<h3>Death Location: {p.diedLocation}</h3>
					<div className="affiliations">
						<h3>Affiliations:
							{affiliations}
						</h3>
					</div>
				</div>
			</div>
			<div className="listRight">
				<h3>Wiki: <a rel="noreferrer" target="_blank" href={p.wiki}>{p.name}</a></h3><br />
				<div className="imageRight">
					<img src={p.image} height="320" width="250" alt={p.name}></img>
				</div>
			</div>
		</div>
	)
}

export default PeopleDetails