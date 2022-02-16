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
		<div className="container">
			<div className="list">
				<div className="uList">
				<h2>Vehicle List</h2>
				<ul>
					{vehiclesList}
				</ul>
				</div>Ï
			</div>
			<div className="addForm">
				<h2>Add new Vehicle</h2>
				<AddNewVehicle user={user} />
			</div>
		</div>
	)
}

export default Vehicles