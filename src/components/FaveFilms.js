import { getFilms, deleteFilms } from '../api/faveFilms'
import { Link, useState, useEffect } from 'react'

const FaveFilms = (props) => {
    const { user } = props
    const [faveFilms, setFaveFilms] = useState([])

    useEffect(() => {
        getFilms(user)
            .then(res => {
                let faveFilmsArray = []
                res.data.film.map((films) => {
                    faveFilmsArray.push(films)
                })
                setFaveFilms(faveFilmsArray)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const removeFilm = (s) => {
        deleteFilms(s._id, user)
            .then(res => {
                getFilms(user)
                    .then(res => {
                        let faveFilmsArray = []
                        res.data.film.map((films) => {
                            faveFilmsArray.push(films)
                        })
                        setFaveFilms(faveFilmsArray)
                    })
                    .catch((error) => {
                    })
            })
    }

    const faveFilmList = faveFilms.map((p, i) => {
        return (
            <li key={i}>
                <div className="savedFilms">
                    {p.title}
                </div>
                <div className="filmRemoveButton">
                    <button className="removeButton" onClick={() => removeFilm(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="faveFilms">
            <h2>Favorite Films</h2>
                <ul>
                    {faveFilmList}
                </ul>      
        </div>
    )
}

export default FaveFilms