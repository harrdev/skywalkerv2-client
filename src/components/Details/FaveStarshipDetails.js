import { useParams } from 'react-router-dom'
import { getStarships } from '../../api/starships'
import { useState, useEffect } from 'react'

const FaveStarshipDetails = (props) => {
    const [usersStarships, setUsersStarships] = useState([])
    const { user } = props
    const faveStarship = useParams()
    useEffect(() => {
        getStarships(user)
            .then(res => {
                res.data.starships.filter((starships) => {
                    const starship = starships.name === faveStarship.id
                    if (starship === true) {
                        setUsersStarships(starships)
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const s = usersStarships
    return (
        <div className="container">
            <div className="listLeft">
                <div className="items">
                    <h1>{s.name} Details</h1>
                    <h3>Model: {s.model}</h3>
                    <h3>Manufacturer: {s.manufacturer}</h3>
                    <h3>Cost in Credits: {s.cost_in_credits}</h3>
                    <h3>Length: {s.length}</h3>
                    <h3>Max Speed: {s.max_atmosphering_speed}</h3>
                    <h3>Crew: {s.crew}</h3>
                    <h3>Passengers: {s.passengers}</h3>
                    <h3>Cargo Capacity: {s.cargo_capacity}</h3>
                    <h3>Consumables: {s.consumables}</h3>
                    <h3>Hyperdrive Rating: {s.hyperdrive_rating}</h3>
                    <h3>MGLT: {s.MGLT}</h3>
                    <h3>Starship Class: {s.starship_class}</h3>
                </div>
            </div>
            <div className="listRight">
                <div className="editForm">
                    
                </div>
            </div>
        </div>
    )
}

export default FaveStarshipDetails