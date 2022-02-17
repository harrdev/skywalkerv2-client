import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addNewStarship } from '../../api/forms';

const AddStarship = (props) => {
    const { user } = props
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewStarship(inputs, user)
        alert("Starship added to your favorites")
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input class="input" type="text" id="name" name="name" onChange={handleChange} /><br />

                <label htmlFor="model">Model</label>
                <input class="input" type="text" id="model" name="model" onChange={handleChange} /><br />

                <label htmlFor="manufacturer">Manufacturer</label>
                <input class="input" type="text" id="manufacturer" name="manufacturer" onChange={handleChange} /><br />

                <label htmlFor="cost_in_credits">Cost in Credits</label>
                <input class="input" type="text" id="cost_in_credits" name="cost_in_credits" onChange={handleChange} /><br />

                <label htmlFor="length">Length</label>
                <input class="input" type="text" id="length" name="length" onChange={handleChange} /><br />

                <label htmlFor="crew">Crew</label>
                <input class="input" type="text" id="crew" name="crew" onChange={handleChange} /><br />

                <label htmlFor="max_atmosphering_speed">Max Speed</label>
                <input class="input" type="text" id="max_atmosphering_speed" name="max_atmosphering_speed" onChange={handleChange} /><br />

                <label htmlFor="passengers">Passengers</label>
                <input class="input" type="text" id="passengers" name="passengers" onChange={handleChange} /><br />

                <label htmlFor="cargo_capacity">Cargo Capacity</label>
                <input class="input" type="text" id="cargo_capacity" name="cargo_capacity" onChange={handleChange} /><br />

                <label htmlFor="consumables">Consumables</label>
                <input class="input" type="text" id="consumables" name="consumables" onChange={handleChange} /><br />

                <label htmlFor="starship_class">Starship Class</label>
                <input class="input" type="text" id="starship_class" name="starship_class" onChange={handleChange} /><br />

                <label htmlFor="MGLT">MGLT</label>
                <input class="input" type="text" id="MGLT" name="MGLT" onChange={handleChange} /><br />

                <label htmlFor="hyperdrive_rating">Hyperdrive Rating</label>
                <input class="input" type="text" id="hyperdrive_rating" name="hyperdrive_rating" onChange={handleChange} /><br />
                

                <input type="submit" value="Add a Starship" />
            </form>
        </div>
    )
}

export default AddStarship