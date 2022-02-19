import { useParams } from 'react-router-dom'
import { getPeople } from '../../api/people'
import { useState, useEffect } from 'react'
import EditPerson from '../Forms/EditPeopleForm'

const FavePeopleDetails = (props) => {
    const [usersPeople, setUsersPeople] = useState([])
    const { user } = props
    const favePerson = useParams()
    console.log("Props are: ", props)
    useEffect(() => {
        getPeople(user)
            .then(res => {
                res.data.people.filter((people) => {
                    const person = people.name === favePerson.id
                    if (person === true) {
                        setUsersPeople(people)
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const p = usersPeople

    return (
        <div className="container">
            <div className="listLeft">
                {props.addButtonClick
                    ?
                    <div className="listRight">
                        <button onClick={props.addClick}>Cancel</button>
                        <div className="editForm">
                            <h2>Edit Person</h2>
                            <EditPerson user={user} people={p} />
                        </div>
                    </div>
                    : ""}
            </div>
            <div className="listRight">
                <button onClick={props.addClick}>Edit Person</button>
                <div className="items">
                    <h1>{p.name} Details</h1>
                    <h3>Homeworld: {p.homeworld}</h3>
                    <h3>Gender: {p.gender}</h3>
                    <h3>Species: {p.species}</h3>
                    <h3>Height: {p.height} m</h3>
                    <h3>Hair Color: {p.hairColor}</h3>
                    <h3>Skin Color: {p.skinColor}</h3>
                    <h3>Eye Color: {p.eyeColor}</h3>
                    <h3>Weight: {p.mass} kg</h3>
                    <h3>Birth Year {p.born}</h3>
                    <h3>Born Location: {p.bornLocation}</h3>
                    <h3>Death Year: {p.died}</h3>
                    <h3>Death Location: {p.diedLocation}</h3>
                    <div>
                        <h3>Affiliations:
                            {p.affiliations
                                ? p.affiliations.map((a, i) => {
                                    return (
                                        <li key={i}>
                                            {a}
                                        </li>
                                    )
                                })
                                : "Loading..."}
                        </h3>
                    </div>
                    <h3>Wiki: <a rel="noreferrer" target="_blank" href={p.wiki}>{p.name}</a></h3>
                    <div>
                        <img src={p.image} height="320" width="250" alt={p.name}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavePeopleDetails