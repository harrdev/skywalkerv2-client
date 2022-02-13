import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHomeworld } from '../../api/peopleDetails'
import axios from 'axios'


const PeopleDetails = (props) => {
	const [homeworld, setHomeworld] = useState('')

	const personName = useParams()
	const person = props.people.filter(person => person.name === personName.name)
	const p = person[0]

	const config = {
		method: 'GET',
		url: p.homeworld,
		headers: {
			"Authorization": `Bearer`
		} 
	}
		axios(config)
			.then(function(response) {
				console.log(response.data)
				setHomeworld(response.data.name)
			})
			.catch(function (error) {
				console.log(error);
			})

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
			<h3>Homeworld: {homeworld}</h3>
		</div>
	)
}

export default PeopleDetails