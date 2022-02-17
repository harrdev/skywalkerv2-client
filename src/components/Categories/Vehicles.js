import { Link } from 'react-router-dom'
import { addVehicles } from '../../api/vehicles'
import AddVehicleForm from '../Forms/AddVehicleForm'

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
			<div className="listLeft">
				<div className="uList">
					<h2>Vehicle List</h2>
					<ul>
						{vehiclesList}
					</ul>
				</div>
			</div>
			<div className="listRight">
				<div className="addForm">
					<h2>Add new Vehicle</h2>
					<AddVehicleForm user={user} />
				</div>
			</div>
		</div>
	)
}

export default Vehicles