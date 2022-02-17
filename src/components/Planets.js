import { Link } from 'react-router-dom'
import { addPlanet } from '../api/planets'
import AddPlanetForm from './AddPlanetForm'

const Planets = (props) => {
	const { user } = props

	const addToFave = (info) => {
		addPlanet(info, user)
	}

	const planetsList = props.planets.map((p, i) => {
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
					<h2>Planet List</h2>
					<ul>
						{planetsList}
					</ul>
				</div>
			</div>
			<div className="listRight">
				<div className="addForm">
					<h2>Add new Planet</h2>
					<AddPlanetForm user={user} />
				</div>
			</div>
		</div>
	)
}

export default Planets