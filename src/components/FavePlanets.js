import { getPlanets, deletePlanets } from '../api/favePlanets'
import { Link, useState, useEffect } from 'react'

const FavePlanets = (props) => {
    const { user } = props
    const [favePlanets, setFavePlanets] = useState([])

    useEffect(() => {
        getPlanets(user)
            .then(res => {
                console.log("getPlanets res: ", res)
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
        console.log("Planet state is: ", favePlanets)
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
                    {p.name}
                </div>
                <div className="planetRemoveButton">
                    <button className="removeButton" onClick={() => removePlanet(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="favePlanets">
            <h2>Fave Planets</h2>
                <ul>
                    {favePlanetList}
                </ul>      
        </div>
    )
}

export default FavePlanets