import { getSpecies, deleteSpecies } from '../api/species'
import { Link, useState, useEffect } from 'react'

const FaveSpecies = (props) => {
    const { user } = props
    const [faveSpecies, setFaveSpecies] = useState([])

    useEffect(() => {
        getSpecies(user)
            .then(res => {
                let faveSpeciesArray = []
                res.data.species.map((species) => {
                    faveSpeciesArray.push(species)
                })
                setFaveSpecies(faveSpeciesArray)
            })
            .catch((error) => {
                console.log("getPeople and setting state errored out: ", error)
            })
    }, [])

    const removeSpecies = (s) => {
        deleteSpecies(s._id, user)
            .then(res => {
                getSpecies(user)
                    .then(res => {
                        let faveSpeciesArray = []
                        res.data.species.map((species) => {
                            faveSpeciesArray.push(species)
                        })
                        setFaveSpecies(faveSpeciesArray)
                    })
                    .catch((error) => {
                    })
            })
    }

    const faveSpeciesList = faveSpecies.map((p, i) => {
        return (
            <li key={i}>
                <div className="faveSpecies">
                    {p.name}
                </div>
                <div className="peopleRemoveButton">
                    <button className="removeButton" onClick={() => removeSpecies(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="saved">
            <div className="savedSpecies">
                <h2>Favorite Species</h2>
                <ul>
                    {faveSpeciesList}
                </ul>
            </div>
        </div>
    )
}

export default FaveSpecies