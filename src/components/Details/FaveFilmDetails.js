import { useParams } from 'react-router-dom'
import { getFilms } from '../../api/films'
import { useState, useEffect } from 'react'
import EditFilm from '../Forms/EditFilmForm'

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
                    return films
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [user, faveFilm.id])

    const f = usersFilms
    
    return (
        <div className="container">
            <div className="listLeft">
                {props.addButtonClick
                    ?
                    <div className="listRight">
                        <button onClick={props.addClick}>Cancel</button>
                        <div className="editForm">
                            <h2>Edit Film</h2>
                            <EditFilm user={user} film={f} />
                        </div>
                    </div>
                    : ""}
            </div>
            <div className="listRight">
                <button onClick={props.addClick}>Edit Film</button>
                <div className="items">
                    <h1>{f.title} Details</h1>
                    <h3>Episode ID: {f.episode_id}</h3>
                    <h3>Opening Crawl: {f.opening_crawl}</h3>
                    <h3>Director: {f.director}</h3>
                    <h3>Producer: {f.producer}</h3>
                    <h3>Release Date: {f.release_date}</h3>
                    <h3>Characters in film:
                        {f.characters
                            ? props.swapiPeople.filter(character => f.characters.includes(character.url)).map((person, i) => {
                                return (
                                    <li key={i}>
                                        {person.name}
                                    </li>
                                )
                            })
                            : "Loading..."}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default FaveFilmDetails