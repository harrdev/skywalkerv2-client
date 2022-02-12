import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPeople } from '../api/people'

const People = (props) => {
	console.log('props in people', props)
	const [people, setPeople] = useState([])

	useEffect(() => {
		getAllPeople()
	}, [])

	const getAllPeople = () => {
		getPeople()
			.then((swdata) => {
				const swpeople = swdata.data.results.map((name) => {
					return name
				})
				setPeople(swpeople)
			})
			.catch(err => console.log(err))
	}
	
	const peopleList = people.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}: Eye Color: {p.eye_color}
				</div>
			</li>
		)
	})

	return (
		<div className="people">
			<h2>People List</h2>
			<ul>
				{peopleList}
			</ul>
		</div>
	)
}

export default People