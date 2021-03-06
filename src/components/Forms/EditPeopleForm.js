import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { editPerson } from '../../api/forms';

const EditPerson = (props) => {
    const { user } = props
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const id = props.people._id
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editPerson(inputs, user, id)
        alert("Updates Made!")
        navigate('/favorites')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className="input" type="text" value={inputs.name} name="name" onChange={handleChange} /><br />

                <label htmlFor="gender">Gender</label>
                <input className="input" type="text" value={inputs.gender} name="gender" onChange={handleChange} /><br />

                <label htmlFor="born">Birth Year</label>
                <input className="input" type="text" value={inputs.born} name="born" onChange={handleChange} /><br />

                <label htmlFor="bornLocation">Birth Location</label>
                <input className="input" type="text" value={inputs.bornLocation} name="bornLocation" onChange={handleChange} /><br />

                <label htmlFor="died">Death Year</label>
                <input className="input" type="text" value={inputs.died} name="died" onChange={handleChange} /><br />

                <label htmlFor="diedLocation">Death Location</label>
                <input className="input" type="text" value={inputs.diedLocation} name="diedLocation" onChange={handleChange} /><br />

                <label htmlFor="height">Height</label>
                <input className="input" type="text" value={inputs.height} name="height" onChange={handleChange} /><br />

                <label htmlFor="mass">Mass</label>
                <input className="input" type="text" value={inputs.mass} name="mass" onChange={handleChange} /><br />

                <label htmlFor="hairColor">Hair Color</label>
                <input className="input" type="text" value={inputs.hairColor} name="hairColor" onChange={handleChange} /><br />

                <label htmlFor="eyeColor">Eye Color</label>
                <input className="input" type="text" value={inputs.eyeColor} name="eyeColor" onChange={handleChange} /><br />

                <label htmlFor="species">Species</label>
                <input className="input" type="text" value={inputs.species} name="species" onChange={handleChange} /><br />

                <label htmlFor="skinColor">Skin Color</label>
                <input className="input" type="text" value={inputs.skinColor} name="skinColor" onChange={handleChange} /><br />

                <label htmlFor="homeworld">Homeworld</label>
                <input className="input" type="text" value={inputs.homeworld} name="homeworld" onChange={handleChange} /><br />

                <label htmlFor="wiki">Wiki</label>
                <input className="input" type="text" value={inputs.wiki} name="wiki" onChange={handleChange} /><br />

                <label htmlFor="image">Image URL</label>
                <input className="input" type="text" value={inputs.image} name="image" onChange={handleChange} /><br />

                <input type="submit" value="Submit Changes" />
            </form>
        </div>
    )
}

export default EditPerson