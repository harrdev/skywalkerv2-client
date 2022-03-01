import { useParams } from 'react-router-dom'
import { getPlanets } from '../../api/planets'
import { useState, useEffect } from 'react'
import EditPlanet from '../Forms/EditPlanetsForm'

const FavePlanetDetails = (props) => {
    const [usersPlanets, setUsersPlanets] = useState([])
    const { user } = props
    const favePlanet = useParams()
    const { setAddButtonClick } = props

    useEffect(() => {
        getPlanets(user)
            .then(res => {
                res.data.planet.filter((planets) => {
                    const planet = planets.name === favePlanet.id
                    if (planet === true) {
                        setUsersPlanets(planets)
                    }
                    setAddButtonClick(false)
                    return planets
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [user, favePlanet.id, setAddButtonClick])

    const p = usersPlanets

    return (
        <div className="container">
            <div className="listLeft">
                {props.addButtonClick
                    &&
                    <div className="listRight">
                        <button onClick={props.addClick}>Cancel</button>
                        <div className="editForm">
                            <h2>Edit Planet</h2>
                            <EditPlanet user={user} planet={p} />
                        </div>
                    </div>}

            </div>
            <div className="listRight">
                <button onClick={props.addClick}>Edit Planet</button>
                <div className="items">
                    <h1>{p.name} Details</h1>
                    <h3>Rotation Period: {p.rotation_period}</h3>
                    <h3>Orbital Period: {p.orbital_period}</h3>
                    <h3>Diameter: {p.diameter}</h3>
                    <h3>Climate: {p.climate}</h3>
                    <h3>Gravity: {p.gravity}</h3>
                    <h3>Terrain: {p.terrain}</h3>
                    <h3>Surface Water: {p.surface_water}</h3>
                    <h3>Population: {p.population}</h3>
                    <h3>Featured in Films:
                        {p.films
                            ? props.films.filter(film =>
                                p.films.includes(film.url)).map((film, i) => {
                                    return (
                                        <li key={i}>
                                            {film.title}
                                        </li>
                                    )
                                })
                            : "Loading"}
                    </h3>
                    <h3>Residents:
                        {p.residents
                            ? props.swapiPeople.filter(people => p.residents.includes(people.url)).map((people, i) => {
                                return (
                                    <li key={i}>
                                        {people.name}
                                    </li>
                                )
                            })
                            : "Loading"}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default FavePlanetDetails