import { useParams } from 'react-router-dom'
import { getPlanets } from '../../api/planets'
import { useState, useEffect } from 'react'
import EditPlanet from '../Forms/EditPlanetsForm'

const FavePlanetDetails = (props) => {
    const [usersPlanets, setUsersPlanets] = useState([])
    const { user } = props
    const favePlanet = useParams()

    useEffect(() => {
        getPlanets(user)
            .then(res => {
                res.data.planet.filter((planets) => {
                    const planet = planets.name === favePlanet.id
                    if (planet === true) {
                        setUsersPlanets(planets)
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const p = usersPlanets

    return (
        <div className="container">
            <div className="listLeft">
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
                    <h3>Featured in Films:</h3>
                    {p.films
                        ? props.films.filter(film =>
                            p.films.includes(film.url)).map((film, i) => {
                                return (
                                    <ul>
                                        <li key={i}>
                                            {film.title}
                                        </li></ul>
                                )
                            })
                        : "Loading..."}
                    <h3>Residents:</h3>
                    {p.residents
                        ? props.swapiPeople.filter(people => p.residents.includes(people.url)).map((people, i) => {
                            return (
                                <ul>
                                    <li key={i}>
                                        {people.name}
                                    </li>
                                </ul>
                            )
                        })
                        : "Loading..."}
                </div>
            </div>
            <div className="listRight">
                <div className="editForm">
                    <h2>Edit Planet</h2>
                    <EditPlanet user={user} people={p} />
                </div>
            </div>
        </div>
    )
}

export default FavePlanetDetails