import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStarships } from '../api/starships'

const Starships = (props) => {
	console.log('props in planets', props)
	const [starships, setStarships] = useState([])

	useEffect(() => {
		getAllstarships()
	}, [])

	const getAllstarships = () => {
		getStarships()
			.then((starships) => {
                console.log("This is the starships data: ", starships)
				const swstarships = starships.data.results.map((name) => {
					return name
				})
				setStarships(swstarships)
			})
			.catch(err => console.log(err))
	}
	
	const starshipsList = starships.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}
				</div>
			</li>
		)
	})

	return (
		<div className="starships">
			<h2>Starships List</h2>
			<ul>
				{starshipsList}
			</ul>
		</div>
	)
}

export default Starships