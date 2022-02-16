import { Link } from 'react-router-dom'
import { addVehicles } from '../api/vehicles'
import AddNewVehicle from './AddVehicleForm'

const Vehicles = (props) => {
	const { user } = props

	const addToFave = (info) => {
		addVehicles(info, user)
    }
	const vehiclesList = props.vehicles.map((p, i) => {
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
		<div className="vehicles">
			<div className="addForm">
				<AddNewVehicle user={user}/>
			</div>
			<h2>Vehicles List</h2>
			<ul>
				{vehiclesList}
			</ul>
		</div>
	)
}

export default Vehicles