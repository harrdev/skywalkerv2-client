import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addNewPerson } from '../api/forms';

const AddPerson = (props) => {
    const { user } = props
    console.log("Form page user: ", user)
    console.log("Form page props: ", props)
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data: ", inputs)
        addNewPerson(inputs, user)
        alert(inputs);
    }

    return (
        <div className="addPerson">
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input class="input" type="text" id="name" name="name" onChange={handleChange} /><br />

                <label for="gender">Gender</label>
                <input class="input" type="text" id="gender" name="gender" onChange={handleChange} /><br />

                <label for="born">Birth Year</label>
                <input class="input" type="text" id="born" name="born" onChange={handleChange} /><br />

                <label for="bornLocation">Birth Location</label>
                <input class="input" type="text" id="bornLocation" name="bornLocation" onChange={handleChange} /><br />

                <label for="died">Death Year</label>
                <input class="input" type="text" id="died" name="died" onChange={handleChange} /><br />

                <label for="diedLocation">Death Location</label>
                <input class="input" type="text" id="diedLocation" name="diedLocation" onChange={handleChange} /><br />

                <label for="height">Height</label>
                <input class="input" type="text" id="height" name="height" onChange={handleChange} /><br />

                <label for="mass">Mass</label>
                <input class="input" type="text" id="mass" name="mass" onChange={handleChange} /><br />

                <label for="hairColor">Hair Color</label>
                <input class="input" type="text" id="hairColor" name="hairColor" onChange={handleChange} /><br />

                <label for="eyeColor">Eye Color</label>
                <input class="input" type="text" id="eyeColor" name="eyeColor" onChange={handleChange} /><br />

                <label for="species">Species</label>
                <input class="input" type="text" id="species" name="species" onChange={handleChange} /><br />

                <label for="skinColor">Skin Color</label>
                <input class="input" type="text" id="skinColor" name="skinColor" onChange={handleChange} /><br />

                <label for="homeworld">Homeworld</label>
                <input class="input" type="text" id="homeworld" name="homeworld" onChange={handleChange} /><br />

                <label for="wiki">Wiki</label>
                <input class="input" type="text" id="wiki" name="wiki" onChange={handleChange} /><br />

                <label for="image">Image URL</label>
                <input class="input" type="text" id="image" name="image" onChange={handleChange} /><br />

                <input type="submit" value="Add a Person" />
            </form>
        </div>
    )
}

export default AddPerson