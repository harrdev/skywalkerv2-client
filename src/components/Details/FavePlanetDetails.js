import { useParams } from 'react-router-dom'
import { getPlanets } from '../../api/planets'
import { useState, useEffect } from 'react'
import EditPlanet from '../EditPlanetsForm'

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
                    {/* <h3>Residents: 
				<ul>
					{planetResidents}
				</ul>
			</h3> */}
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