import { getVehicles, deleteVehicles } from '../api/vehicles'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FaveVehicles = (props) => {
    const { user } = props
    const [faveVehicles, setFaveVehicles] = useState([])

    useEffect(() => {
        getVehicles(user)
            .then(res => {
                let faveVehiclesArray = []
                res.data.vehicles.map((vehicles) => {
                    faveVehiclesArray.push(vehicles)
                })
                setFaveVehicles(faveVehiclesArray)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const removeVehicles = (s) => {
        deleteVehicles(s._id, user)
            .then(res => {
                getVehicles(user)
                    .then(res => {
                        let faveVehiclesArray = []
                        res.data.vehicles.map((vehicles) => {
                            faveVehiclesArray.push(vehicles)
                        })
                        setFaveVehicles(faveVehiclesArray)
                    })
                    .catch((error) => {
                    })
            })
    }

    const faveVehiclesList = faveVehicles.map((p, i) => {
        return (
            <li key={i}>
                <div className="faveVehicles">
                    <Link to={`/Vehicles/${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
                </div>
                <div className="peopleRemoveButton">
                    <button className="removeButton" onClick={() => removeVehicles(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="saved">
            <div className="savedVehicles">
                <h2>Favorite Vehicles</h2>
                <ul>
                    {faveVehiclesList}
                </ul>
            </div>
        </div>
    )
}

export default FaveVehicles