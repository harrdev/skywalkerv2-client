import { getPlanets, deletePlanets } from '../api/planets'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FavePlanets = (props) => {
    const { user } = props
    const [favePlanets, setFavePlanets] = useState([])

    useEffect(() => {
        getPlanets(user)
            .then(res => {
                let favePlanetsArray = []
                res.data.planet.map((planets) => {
                    favePlanetsArray.push(planets)
                })
                setFavePlanets(favePlanetsArray)
            })
            .catch((error) => {
                console.log("getPeople and setting state errored out: ", error)
            })
    }, [])

    const removePlanet = (s) => {
        deletePlanets(s._id, user)
            .then(res => {
                getPlanets(user)
                    .then(res => {
                        let favePlanetsArray = []
                        res.data.planet.map((planets) => {
                            favePlanetsArray.push(planets)
                        })
                        setFavePlanets(favePlanetsArray)
                    })
                    .catch((error) => {
                    })
            })
    }

    const favePlanetList = favePlanets.map((p, i) => {
        return (
            <li key={i}>
                <div className="savedPlanets">
                    <Link to={`/Planets/${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
                </div>
                <div className="planetRemoveButton">
                    <button className="removeButton" onClick={() => removePlanet(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="favePlanets">
            <h2>Favorite Planets</h2>
            <ul>
                {favePlanetList}
            </ul>
        </div>
    )
}

export default FavePlanets