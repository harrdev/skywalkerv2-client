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

    // const planetFilms = props.films.filter(film =>
    //     p.films.includes(film.url)).map((film, i) => {
    //         return (
    //             <li key={i}>
    //                 {film.title}
    //             </li>
    //         )
    //     })
    console.log("props.films is: ", props.films)
    console.log("p.films is: ", p.films)

    // const planetResidents = props.swapiPeople.filter(people => p.residents.includes(people.url)).map((people, i) => {
    //     return (
    //         <li key={i}>
    //             {people.name}
    //         </li>
    //     )
    // })
    console.log("p.residents: ", p.residents)
    console.log("props.swapiPeople: ", props.swapiPeople)

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
                    <ul>
                        {/* {planetFilms} */}
                    </ul>
                    <h3>Residents:</h3>
                    <ul>
                        {/* {planetResidents} */}
                    </ul>
                </div>
            </div>
            <div className="listRight">
                <div className="editForm">
                    <h2>Edit Planet</h2>
                    <EditPlanet user={user} props={p} />
                </div>
            </div>
        </div>
    )
}

export default FavePlanetDetails