import { useParams } from 'react-router-dom'
import { getFilms } from '../../api/films'
import { useState, useEffect } from 'react'

const FaveFilmDetails = (props) => {
    const [usersFilms, setUsersFilms] = useState([])
    const { user } = props
    const faveFilm = useParams()
    useEffect(() => {
        getFilms(user)
            .then(res => {
                res.data.film.filter((films) => {
                    const film = films.title === faveFilm.id
                    if (film === true) {
                        setUsersFilms(films)
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const f = usersFilms
    return (
        <div className="main">
            <h1>{f.title} Details</h1>
			<h3>Episode ID: {f.episode_id}</h3>
			<h3>Opening Crawl: {f.opening_crawl}</h3>
			<h3>Director: {f.director}</h3>
			<h3>Producer: {f.producer}</h3>
			<h3>Release Date: {f.release_date}</h3>
        </div>
    )
}

export default FaveFilmDetails