import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPlanets } from '../api/planets'

const Planets = (props) => {
	console.log('props in planets', props)
	const [planets, setPlanets] = useState([])

	useEffect(() => {
		getAllPlanets()
	}, [])

	const getAllPlanets = () => {
		getPlanets()
			.then((planets) => {
                console.log("This is the planets data: ", planets)
				const swplanets = planets.data.results.map((name) => {
					return name
				})
				setPlanets(swplanets)
			})
			.catch(err => console.log(err))
	}
	
	const planetsList = planets.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}
				</div>
			</li>
		)
	})

	return (
		<div className="planets">
			<h2>Planets List</h2>
			<ul>
				{planetsList}
			</ul>
		</div>
	)
}

export default Planets