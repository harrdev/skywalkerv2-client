import { getPeople } from '../api/favePeople'
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

    console.log("favePeople are: ", favePeople)
    const favePeopleList = favePeople.map((p, i) => {
        return (
            <li key={i}>
                <div className="favePeople">
                    {p.name}
                </div>
            </li>
        )
    })

    return (
        <div className="saved">
            <h2>Saved Data</h2>
            <ul>
                {favePeopleList}
            </ul>
        </div>
    )
}

export default Saved