import { Link } from 'react-router-dom'

const Planets = (props) => {
	
	const planetsList = props.planets.map((p, i) => {
		return (
			<li key={i}>
				<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
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