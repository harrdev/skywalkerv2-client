import { useParams } from 'react-router-dom'
import { getPeople } from '../../api/people'
import { useState, useEffect } from 'react'

const FavePeopleDetails = (props) => {
    const [usersPeople, setUsersPeople] = useState([])
    const { user } = props
    const favePerson = useParams()
    useEffect(() => {
        getPeople(user)
            .then(res => {
                res.data.people.filter((people) => {
                    console.log("passed person is: ", favePerson.id)
                    const person = people.name === favePerson.id
                    console.log("Matched person is: ", person)
                    if (person === true) {
                        setUsersPeople(people)
                    }
                    console.log("usersPeople is: ", usersPeople)
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const p = usersPeople
    //******* Affiliations not working, data not set before initialized ****************/
    // const affiliations = p.affiliations.map((a, i) => {
    //     return (
    //         <li key={i}>
    //             {a}
    //         </li>
    //     )
    // })
    return (
        <div className="details">
            <h1>Favorite Person Details</h1>
            <h3>Name: {p.name}</h3>
            <h3>Gender: {p.gender}</h3>
            <h3>Species: {p.species}</h3>
            <h3>Birth Year {p.born}</h3>
            <h3>Death Year: {p.died}</h3>
            <h3>Death Location: {p.diedLocation}</h3>
            <h3>Height: {p.height} m</h3>
            <h3>Eye Color: {p.eyeColor}</h3>
            <h3>Hair Color: {p.hairColor}</h3>
            <h3>Weight: {p.mass} kg</h3>
            <h3>Skin Color: {p.skinColor}</h3>
            <h3>Born Location: {p.bornLocation}</h3>
            <h3>Homeworld: {p.homeworld}</h3>
            <div>
                <h3>Affiliations:</h3>
                <h3>Affiliations:</h3>
                {/* <ul>
                    {affiliations}
                </ul> */}
            </div>
            <h3>Wiki: <a rel="noreferrer" target="_blank" href={p.wiki}>{p.name}</a></h3>
            <div>
                <img src={p.image} height="320" width="250" alt={p.name}></img>
            </div>
        </div>
    )
}

export default FavePeopleDetails