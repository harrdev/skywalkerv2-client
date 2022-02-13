import { useParams } from "react-router-dom";

const VehicleDetails = (props) => {
	
    const vehicleName = useParams()
	const vehicleData = props.vehicles.filter(vehicle => vehicle.name === vehicleName.name)
	const v = vehicleData[0]

	return (
		<div className="details">
			<h2>Vehicle Details Page</h2>
			<h3>Name: {v.name}</h3>
			<h3>Model: {v.model}</h3>
			<h3>Manufacturer: {v.manufacturer}</h3>
			<h3>Cost in Credits: {v.cost_in_credits}</h3>
			<h3>Length: {v.length}m</h3>
			<h3>Crew: {v.crew}</h3>
			<h3>Max Speed: {v.max_atmosphering_speed}</h3>
			<h3>Passengers: {v.passengers}</h3>
			<h3>Cargo Capacity: {v.cargo_capacity}</h3>
			<h3>Consumables: {v.consumables}</h3>
			<h3>Vehicle Class: {v.vehicle_class}</h3>
		</div>
	)
}

export default VehicleDetails