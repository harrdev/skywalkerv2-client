import { Link } from 'react-router-dom'
import { addSpecies } from '../api/species'
import AddSpeciesForm from './AddSpeciesForm'

const Species = (props) => {
	const { user } = props

	const addToFave = (info) => {
		addSpecies(info, user)
    }

	const speciesList = props.species.map((p, i) => {
		return (
			<li key={i}>
				<div>
					<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
				</div>
				<div id="buttonDiv">
					<button className="button" onClick={() => addToFave(p)}>Add To Favorites</button>
				</div>

			</li>
		)
	})

	return (
		<div className="species">
			<div className="addForm">
				<AddSpeciesForm user={user}/>
			</div>
			<h2>Species List</h2>
			<ul>
				{speciesList}
			</ul>
		</div>
	)
}

export default Species