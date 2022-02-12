import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getSpecies } from '../api/species'

const Species = (props) => {
	console.log('props in planets', props)
	const [species, setSpecies] = useState([])

	useEffect(() => {
		getAllspecies()
	}, [])

	const getAllspecies = () => {
		getSpecies()
			.then((species) => {
                console.log("This is the species data: ", species)
				const swspecies = species.data.results.map((name) => {
					return name
				})
				setSpecies(swspecies)
			})
			.catch(err => console.log(err))
	}
	
	const speciesList = species.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}
				</div>
			</li>
		)
	})

	return (
		<div className="species">
			<h2>Species List</h2>
			<ul>
				{speciesList}
			</ul>
		</div>
	)
}

export default Species