import { getPeople, deletePerson } from '../../api/people'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FavePeople = (props) => {
    const { user } = props
    const [favePeople, setFavePeople] = useState([])

    useEffect(() => {
        getPeople(user)
            .then(res => {
                let favePeopleArray = []
                res.data.people.map((people) => {
                    favePeopleArray.push(people)
                })
                setFavePeople(favePeopleArray)
            })
            .catch((error) => {
                console.log("getPeople and setting state errored out: ", error)
            })
    }, [])

    const removePerson = (s) => {
        deletePerson(s._id, user)
            .then(res => {
                getPeople(user)
                    .then(res => {
                        let favePeopleArray = []
                        res.data.people.map((people) => {
                            favePeopleArray.push(people)
                        })
                        setFavePeople(favePeopleArray)
                    })
                    .catch((error) => {
                    })
            })
    }

    const favePeopleList = favePeople.map((p, i) => {
        return (
            <li key={i}>
                <div>
                    <Link to={`/People/${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
                </div>
                <div className="peopleRemoveButton">
                    <button className="removeButton" onClick={() => removePerson(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="faveContainer">
            <h2>Favorite People</h2>
            <ul>
                {favePeopleList}
            </ul>
        </div>
    )
}

export default FavePeople