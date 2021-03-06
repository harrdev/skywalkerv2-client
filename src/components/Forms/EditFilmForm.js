import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { editFilm } from '../../api/forms';

const EditFilm = (props) => {
    const { user } = props
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const id = props.film._id

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editFilm(inputs, user, id)
        alert("Updates Made!")
        navigate('/favorites')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input className="input" type="text" value={inputs.title} name="title" onChange={handleChange} /><br />

                <label htmlFor="episode_id">Episode ID</label>
                <input className="input" type="text" value={inputs.episode_id} name="episode_id" onChange={handleChange} /><br />

                <label htmlFor="opening_crawl">Opening Crawl</label>
                <textarea className="input" type="text" value={inputs.opening_crawl} name="opening_crawl" onChange={handleChange} /><br />

                <label htmlFor="director">Director</label>
                <input className="input" type="text" value={inputs.director} name="director" onChange={handleChange} /><br />

                <label htmlFor="producer">Producer</label>
                <input className="input" type="text" value={inputs.producer} name="producer" onChange={handleChange} /><br />

                <label htmlFor="release_date">Release Date</label>
                <input className="input" type="text" value={inputs.release_date} name="release_date" onChange={handleChange} /><br />

                <input type="submit" value="Edit Film" />
            </form>
        </div>
    )
}

export default EditFilm