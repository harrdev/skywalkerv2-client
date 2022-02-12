import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFilms } from '../api/films'

const Films = (props) => {
	console.log('props in planets', props)
	const [films, setFilms] = useState([])

	useEffect(() => {
		getAllfilms()
	}, [])

	const getAllfilms = () => {
		getFilms()
			.then((films) => {
                console.log("This is the films data: ", films.data.results[0].title)
				const swfilms = films.data.results.map((title) => {
					return title
				})
				setFilms(swfilms)
			})
			.catch(err => console.log(err))
	}
	
	const filmsList = films.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.title}
				</div>
			</li>
		)
	})

	return (
		<div className="films">
			<h2>Films List</h2>
			<ul>
				{filmsList}
			</ul>
		</div>
	)
}

export default Films