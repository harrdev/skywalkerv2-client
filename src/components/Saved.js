import { getPeople, deletePerson } from '../api/favePeople'
import { Link, useState, useEffect } from 'react'

const Saved = (props) => {
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
        console.log("Person state is: ", favePeople)
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
                <div className="favePeople">
                    {p.name}
                </div>
                <div className="peopleRemoveButton">
                    <button className="removeButton" onClick={() => removePerson(p)}>Delete from Favorites</button>
                </div>
            </li>
        )
    })


    return (
        <div className="saved">
            <div className="savedPeople">
                <h2>Saved People</h2>
                <ul>
                    {favePeopleList}
                </ul>
            </div>
        </div>
    )
}

export default Saved