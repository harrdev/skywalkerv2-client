import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { editStarship } from '../api/forms';

const EditStarship = (props) => {
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
        editStarship(inputs, user, id)
        alert("Updates Made!")
        navigate('/favorites')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input class="input" type="text" value={inputs.name} name="name" onChange={handleChange} /><br />

                <label htmlFor="model">Model</label>
                <input class="input" type="text" value={inputs.model} name="model" onChange={handleChange} /><br />

                <label htmlFor="manufacturer">Manufacturer</label>
                <input class="input" type="text" value={inputs.manufacturer} name="manufacturer" onChange={handleChange} /><br />

                <label htmlFor="cost_in_credits">Cost in Credits</label>
                <input class="input" type="text" value={inputs.cost_in_credits} name="cost_in_credits" onChange={handleChange} /><br />

                <label htmlFor="length">Length</label>
                <input class="input" type="text" value={inputs.length} name="length" onChange={handleChange} /><br />

                <label htmlFor="crew">Crew</label>
                <input class="input" type="text" value={inputs.crew} name="crew" onChange={handleChange} /><br />

                <label htmlFor="max_atmosphering_speed">Max Speed</label>
                <input class="input" type="text" value={inputs.max_atmosphering_speed} name="max_atmosphering_speed" onChange={handleChange} /><br />

                <label htmlFor="passengers">Passengers</label>
                <input class="input" type="text" value={inputs.passengers} name="passengers" onChange={handleChange} /><br />

                <label htmlFor="cargo_capacity">Cargo Capacity</label>
                <input class="input" type="text" value={inputs.cargo_capacity} name="cargo_capacity" onChange={handleChange} /><br />

                <label htmlFor="consumables">Consumables</label>
                <input class="input" type="text" value={inputs.consumables} name="consumables" onChange={handleChange} /><br />

                <label htmlFor="starship_class">Starship Class</label>
                <input class="input" type="text" value={inputs.starship_class} name="starship_class" onChange={handleChange} /><br />

                <label htmlFor="MGLT">MGLT</label>
                <input class="input" type="text" value={inputs.MGLT} name="MGLT" onChange={handleChange} /><br />

                <label htmlFor="hyperdrive_rating">Hyperdrive Rating</label>
                <input class="input" type="text" value={inputs.hyperdrive_rating} name="hyperdrive_rating" onChange={handleChange} /><br />

                <input type="submit" value="Submit Changes" />
            </form>
        </div>
    )
}

export default EditStarship