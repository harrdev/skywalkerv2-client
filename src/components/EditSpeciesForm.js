import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { editSpecies } from '../api/forms';

const EditSpecies = (props) => {
    const { user } = props
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const id = props.props._id
    const p = props.props
    console.log("inputs state: ", inputs)
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editSpecies(inputs, user, id)
        alert("Updates Made!")
        navigate('/favorites')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input class="input" type="text" value={inputs.name} name="name" onChange={handleChange} /><br />

                <label htmlFor="classification">Classification</label>
                <input class="input" type="text" value={inputs.classification} name="classification" onChange={handleChange} /><br />

                <label htmlFor="average_height">Average Height</label>
                <input class="input" type="text" value={inputs.average_height} name="average_height" onChange={handleChange} /><br />

                <label htmlFor="skin_colors">Skin Colors</label>
                <input class="input" type="text" value={inputs.skin_colors} name="skin_colors" onChange={handleChange} /><br />

                <label htmlFor="hair_colors">Hair Colors</label>
                <input class="input" type="text" value={inputs.hair_colors} name="hair_colors" onChange={handleChange} /><br />

                <label htmlFor="eye_colors">Eye Colors</label>
                <input class="input" type="text" value={inputs.eye_colors} name="eye_colors" onChange={handleChange} /><br />

                <label htmlFor="average_lifespan">Average Lifespan</label>
                <input class="input" type="text" value={inputs.average_lifespan} name="average_lifespan" onChange={handleChange} /><br />

                <label htmlFor="language">Language</label>
                <input class="input" type="text" value={inputs.language} name="language" onChange={handleChange} /><br />

                <input type="submit" value="Submit Changes" />
            </form>
        </div>
    )
}

export default EditSpecies