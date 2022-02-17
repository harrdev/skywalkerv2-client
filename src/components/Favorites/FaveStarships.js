import { getStarships, deleteStarships } from '../../api/starships'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FaveStarships = (props) => {
    const { user } = props
    const [faveStarships, setFaveStarships] = useState([])

    useEffect(() => {
        getStarships(user)
            .then(res => {
                let faveStarshipsArray = []
                res.data.starships.map((starships) => {
                    faveStarshipsArray.push(starships)
                })
                setFaveStarships(faveStarshipsArray)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const removeStarships = (s) => {
        deleteStarships(s._id, user)
            .then(res => {
                getStarships(user)
                    .then(res => {
                        let faveStarshipsArray = []
                        res.data.starships.map((starships) => {
                            faveStarshipsArray.push(starships)
                        })
                        setFaveStarships(faveStarshipsArray)
                    })
                    .catch((error) => {
                    })
            })
    }

    const faveStarshipsList = faveStarships.map((p, i) => {
        return (
            <li key={i}>
                <div className="faveStarships">
                    <Link to={`/Starships/${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
                </div>
                <div className="starshipsRemoveButton">
                    <button className="removeButton" onClick={() => removeStarships(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="faveContainer">
            <h2>Favorite Starships</h2>
            <ul>
                {faveStarshipsList}
            </ul>
        </div>
    )
}

export default FaveStarships