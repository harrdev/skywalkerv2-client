import { useParams } from 'react-router-dom'
import { getStarships } from '../../api/starships'
import { useState, useEffect } from 'react'
import EditStarship from '../Forms/EditStarshipForm'

const FaveStarshipDetails = (props) => {
    const [usersStarships, setUsersStarships] = useState([])
    const { user } = props
    const faveStarship = useParams()
    const { setAddButtonClick } = props

    useEffect(() => {
        getStarships(user)
            .then(res => {
                res.data.starships.filter((starships) => {
                    const starship = starships.name === faveStarship.id
                    if (starship === true) {
                        setUsersStarships(starships)
                    }
                    setAddButtonClick(false)
                    return starships
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [user, faveStarship.id, setAddButtonClick])

    const s = usersStarships
    return (
        <div className="container">
            <div className="listLeft">
                {props.addButtonClick
                    &&
                    <div className="listRight">
                        <button onClick={props.addClick}>Cancel</button>
                        <div className="editForm">
                            <h2>Edit Starship</h2>
                            <EditStarship user={user} props={s} />
                        </div>
                    </div>}
            </div>
            <div className="listRight">
                <button onClick={props.addClick}>Edit Starship</button>
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
        </div>
    )
}

export default FaveStarshipDetails