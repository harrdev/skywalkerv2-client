import { Link } from 'react-router-dom'
import { addPlanet } from '../api/planets'
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
		<div className="planets">
			<h2>Planets List</h2>
			<ul>
				{planetsList}
			</ul>
		</div>
	)
}

export default Planets