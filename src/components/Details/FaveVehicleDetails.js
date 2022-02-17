import { useParams } from 'react-router-dom'
import { getVehicles } from '../../api/vehicles'
import { useState, useEffect } from 'react'
import EditVehicle from '../Forms/EditVehicleForm'

const FaveVehicleDetails = (props) => {
    const [usersVehicles, setUsersVehicles] = useState([])
    const { user } = props
    const faveVehicle = useParams()

    useEffect(() => {
        getVehicles(user)
            .then(res => {
                res.data.vehicles.filter((vehicles) => {
                    const vehicle = vehicles.name === faveVehicle.id
                    if (vehicle === true) {
                        setUsersVehicles(vehicles)
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const v = usersVehicles

    return (
        <div className="container">
            <div className="listLeft">
                <div className="items">
                    <h1>{v.name} Details</h1>
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
            </div>
            <div className="listRight">
                <div className="editForm">
                    <h2>Edit Vehicle</h2>
                    <EditVehicle user={user} props={v} />
                </div>
            </div>
        </div>
    )
}

export default FaveVehicleDetails