import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { editPlanet } from '../../api/forms';

const EditPlanet = (props) => {
    const { user } = props
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const id = props.planet._id

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editPlanet(inputs, user, id)
        alert("Updates Made!")
        navigate('/favorites')
    }

    return (
        <div class="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input class="input" type="text" value={inputs.name} name="name" onChange={handleChange} /><br />

                <label htmlFor="rotation_period">Rotation Period</label>
                <input class="input" type="text" value={inputs.rotation_period} name="rotation_period" onChange={handleChange} /><br />

                <label htmlFor="orbital_period">Orbital Period</label>
                <input class="input" type="text" value={inputs.orbital_period} name="orbital_period" onChange={handleChange} /><br />

                <label htmlFor="diameter">Diameter</label>
                <input class="input" type="text" value={inputs.diameter} name="diameter" onChange={handleChange} /><br />

                <label htmlFor="climate">Climate</label>
                <input class="input" type="text" value={inputs.climate} name="climate" onChange={handleChange} /><br />

                <label htmlFor="gravity">Gravity</label>
                <input class="input" type="text" value={inputs.gravity} name="gravity" onChange={handleChange} /><br />

                <label htmlFor="terrain">Terrain</label>
                <input class="input" type="text" value={inputs.terrain} name="terrain" onChange={handleChange} /><br />

                <label htmlFor="surface_water">Surface Water</label>
                <input class="input" type="text" value={inputs.surface_water} name="surface_water" onChange={handleChange} /><br />

                <label htmlFor="population">Population</label>
                <input class="input" type="text" value={inputs.population} name="population" onChange={handleChange} /><br />

                <input type="submit" value="Submit Changes" />
            </form>
        </div>
    )
}

export default EditPlanet