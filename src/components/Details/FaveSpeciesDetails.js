import { useParams } from 'react-router-dom'
import { getSpecies } from '../../api/species'
import { useState, useEffect } from 'react'
import EditSpecies from '../Forms/EditSpeciesForm'

const FaveSpeciesDetails = (props) => {
    const [usersSpecies, setUsersSpecies] = useState([])
    const { user } = props
    const faveSpecies = useParams()
    useEffect(() => {
        getSpecies(user)
            .then(res => {
                console.log("Species data: ", res.data.species)
                res.data.species.filter((specie) => {
                    const species = specie.name === faveSpecies.id
                    if (species === true) {
                        setUsersSpecies(specie)
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const s = usersSpecies
    console.log("s.people is: ", s)
    console.log("props.swapiPeople is: ", props.swapiPeople)
    return (
        <div className="container">
            <div className="listLeft">
                {props.addButtonClick
                    ?
                    <div className="listRight">
                        <button onClick={props.addClick}>Cancel</button>
                        <div className="editForm">
                            <h2>Edit Species</h2>
                            <EditSpecies user={user} props={s} />
                        </div>
                    </div>
                    : ""}
            </div>
            <div className="listRight">
                <button onClick={props.addClick}>Edit Species</button>
                <div className="items">
                    <h1>{s.name} Details</h1>
                    <h3>Classification: {s.classification}</h3>
                    <h3>Average Height: {s.average_height}</h3>
                    <h3>Skin Colors: {s.skin_colors}</h3>
                    <h3>Hair Colors: {s.hair_colors}</h3>
                    <h3>Eye Colors: {s.eye_colors}</h3>
                    <h3>Average Lifespan: {s.average_lifespan}</h3>
                    <h3>Language: {s.language}</h3>
                    <h3>People of this species:</h3>
                    {s.people
                        ? props.swapiPeople.filter(person => s.people.includes(person.url)).map((person, i) => {
                            return (
                                <ul>
                                    <li key={i}>
                                        {person.name}
                                    </li></ul>
                            )
                        })
                        : "Loading..."}
                </div>
            </div>
        </div>
    )
}

export default FaveSpeciesDetails