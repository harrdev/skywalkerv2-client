import { getStarships, deleteStarships } from '../api/faveStarships'
import { Link, useState, useEffect } from 'react'

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
                    {p.name}
                </div>
                <div className="starshipsRemoveButton">
                    <button className="removeButton" onClick={() => removeStarships(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="saved">
            <div className="savedStarships">
                <h2>Favorite Starships</h2>
                <ul>
                    {faveStarshipsList}
                </ul>
            </div>
        </div>
    )
}

export default FaveStarships