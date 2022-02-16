import apiUrl from '../apiConfig'
import axios from 'axios'

export const addNewPerson = (info, user) => {
    console.log("This is the data: ", info)
    console.log("This is the user: ", user)
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/newPerson/People`,
        data: {
            info: {
                name: info.name,
                eyeColor: info.eyeColor,
                hairColor: info.hairColor,
                skinColor: info.skinColor,
                mass: info.mass,
                height: info.height,
                affiliations: info.affiliations,
                born: info.born,
                died: info.died,
                species: info.species,
                deathLocation: info.deathLocation,
                bornLocation: info.bornLocation,
                image: info.image,
                wiki: info.wiki,
                homeworld: info.homeworld,
                gender: info.gender
            },
        },
    })
}