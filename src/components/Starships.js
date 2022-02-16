import { Link } from 'react-router-dom'
import { addStarships } from '../api/starships'
import AddStarshipForm from './AddStarshipForm'

const Starships = (props) => {
	const { user } = props

	const addToFave = (info) => {
		addStarships(info, user)
    }
	const starshipsList = props.starships.map((p, i) => {
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
		<div className="starships">
			<div className="addForm">
				<AddStarshipForm user={user}/>
			</div>
			<h2>Starships List</h2>
			<ul>
				{starshipsList}
			</ul>
		</div>
	)
}

export default Starships