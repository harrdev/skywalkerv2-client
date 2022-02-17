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
    return (
        <div className="container">
            <div className="listLeft">
                <div className="items">
                    <h1>{s.name} Details</h1>
                    <h3>Classification: {s.classification}</h3>
                    <h3>Average Height: {s.average_height}</h3>
                    <h3>Skin Colors: {s.skin_colors}</h3>
                    <h3>Hair Colors: {s.hair_colors}</h3>
                    <h3>Eye Colors: {s.eye_colors}</h3>
                    <h3>Average Lifespan: {s.average_lifespan}</h3>
                    <h3>Language: {s.language}</h3>
                </div>
            </div>
            <div className="listRight">
                <div className="editForm">
                    <h2>Edit Species</h2>
                    <EditSpecies user={user} props={s} />
                </div>
            </div>
        </div>
    )
}

export default FaveSpeciesDetails