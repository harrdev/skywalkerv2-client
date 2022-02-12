import { Link } from 'react-router-dom'

const Vehicles = (props) => {
	console.log('props in planets', props)
	
	const vehiclesList = props.vehicles.map((p, i) => {
		return (
			<li key={i}>
				<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
			</li>
		)
	})

	return (
		<div className="vehicles">
			<h2>Vehicles List</h2>
			<ul>
				{vehiclesList}
			</ul>
		</div>
	)
}

export default Vehicles