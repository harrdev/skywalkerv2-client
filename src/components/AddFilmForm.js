import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addNewFilm } from '../api/forms';

const AddFilm = (props) => {
    const { user } = props
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState("")
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        // setTextarea(event.target.value)
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewFilm(inputs, user)
        alert(inputs);
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input class="input" type="text" id="title" name="title" onChange={handleChange} /><br />

                <label htmlFor="episode_id">Episode ID</label>
                <input class="input" type="text" id="episode_id" name="episode_id" onChange={handleChange} /><br />

                <label htmlFor="opening_crawl">Opening Crawl</label>
                <textarea class="input" type="text" id="opening_crawl" name="opening_crawl" onChange={handleChange} /><br />

                <label htmlFor="director">Director</label>
                <input class="input" type="text" id="director" name="director" onChange={handleChange} /><br />

                <label htmlFor="producer">Producer</label>
                <input class="input" type="text" id="producer" name="producer" onChange={handleChange} /><br />

                <label htmlFor="release_date">Release Date</label>
                <input class="input" type="text" id="release_date" name="release_date" onChange={handleChange} /><br />

                <input type="submit" value="Add a Film" />
            </form>
        </div>
    )
}

export default AddFilm