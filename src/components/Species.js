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
		<div className="container">
			<div className="listLeft">
				<div className="uList">
					<h2>Species List</h2>
					<ul>
						{speciesList}
					</ul>
				</div>
			</div>
			<div className="listRight">
				<div className="addForm">
					<h2>Add new Species</h2>
					<AddSpeciesForm user={user} />
				</div>
			</div>
		</div>
	)
}

export default Species