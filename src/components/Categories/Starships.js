import { Link } from 'react-router-dom'
import { addStarships } from '../../api/starships'
import AddStarshipForm from '../Forms/AddStarshipForm'

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
		<div className="container">
			<div className="listLeft">
				<button onClick={props.addClick}>Add Starship</button>
				<div className="uList">
					<h2>Starship List</h2>
					<ul>
						{starshipsList}
					</ul>
				</div>
			</div>
			<div className="listRight">
				{props.addButtonClick
					?
					<div className="listRight">
						<div className="addForm">
							<h2>Add Starship</h2>
							<AddStarshipForm user={user} />
						</div>
					</div>
					: ""}
			</div>
		</div>
	)
}

export default Starships