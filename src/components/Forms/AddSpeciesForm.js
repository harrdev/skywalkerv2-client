import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addNewSpecies} from '../../api/forms';

const AddSpecies = (props) => {

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
        addNewSpecies(inputs, user)
        alert("Species added to your favorites")
        navigate('/favorites')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className="input" type="text" id="name" name="name" onChange={handleChange} /><br />

                <label htmlFor="classNameification">classNameification</label>
                <input className="input" type="text" id="classNameification" name="classNameification" onChange={handleChange} /><br />

                <label htmlFor="average_height">Average Height</label>
                <input className="input" type="text" id="average_height" name="average_height" onChange={handleChange} /><br />

                <label htmlFor="skin_colors">Skin Colors</label>
                <input className="input" type="text" id="skin_colors" name="skin_colors" onChange={handleChange} /><br />

                <label htmlFor="hair_colors">Hair Colors</label>
                <input className="input" type="text" id="hair_colors" name="hair_colors" onChange={handleChange} /><br />

                <label htmlFor="eye_colors">Eye Colors</label>
                <input className="input" type="text" id="eye_colors" name="eye_colors" onChange={handleChange} /><br />

                <label htmlFor="average_lifespan">Average Lifespan</label>
                <input className="input" type="text" id="average_lifespan" name="average_lifespan" onChange={handleChange} /><br />

                <label htmlFor="language">Language</label>
                <input className="input" type="text" id="language" name="language" onChange={handleChange} /><br />

                <input type="submit" value="Add a Species" />
            </form>
        </div>
    )
}

export default AddSpecies