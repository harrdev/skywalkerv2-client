import { useState } from 'react'
import { addNewPlanet } from '../../api/forms';
import { useNavigate } from 'react-router-dom'

const AddPlanet = (props) => {

    const { user } = props
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewPlanet(inputs, user)
        alert("Planet added to your favorites")
        navigate('/favorites')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className="input" type="text" id="name" name="name" onChange={handleChange} /><br />

                <label htmlFor="rotation_period">Rotation Period</label>
                <input className="input" type="text" id="rotation_period" name="rotation_period" onChange={handleChange} /><br />

                <label htmlFor="orbital_period">Orbital Period</label>
                <input className="input" type="text" id="orbital_period" name="orbital_period" onChange={handleChange} /><br />

                <label htmlFor="diameter">Diameter</label>
                <input className="input" type="text" id="diameter" name="diameter" onChange={handleChange} /><br />

                <label htmlFor="terrain">Terrain</label>
                <input className="input" type="text" id="terrain" name="terrain" onChange={handleChange} /><br />

                <label htmlFor="climate">Climate</label>
                <input className="input" type="text" id="climate" name="climate" onChange={handleChange} /><br />

                <label htmlFor="gravity">Gravity</label>
                <input className="input" type="text" id="gravity" name="gravity" onChange={handleChange} /><br />

                <label htmlFor="surface_water">Surface Water</label>
                <input className="input" type="text" id="surface_water" name="surface_water" onChange={handleChange} /><br />

                <label htmlFor="population">Population</label>
                <input className="input" type="text" id="population" name="population" onChange={handleChange} /><br />

                <input type="submit" value="Add a Planet" />
            </form>
        </div>
    )
}

export default AddPlanet