import { getVehicles, deleteVehicles } from '../api/faveVehicles'
import { Link, useState, useEffect } from 'react'

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
                    {p.name}
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