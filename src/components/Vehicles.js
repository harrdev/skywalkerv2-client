import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getVehicles } from '../api/vehicles'

const Vehicles = (props) => {
	console.log('props in planets', props)
	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		getAllVehicles()
	}, [])

	const getAllVehicles = () => {
		getVehicles()
			.then((vehicles) => {
                console.log("This is the vehicles data: ", vehicles)
				const swvehicles = vehicles.data.results.map((name) => {
					return name
				})
				setVehicles(swvehicles)
			})
			.catch(err => console.log(err))
	}
	
	const vehiclesList = vehicles.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}
				</div>
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