import apiUrl from '../apiConfig'
import axios from 'axios'

export const addPerson = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/People`,
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

export const getPeople = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/saved'
})
    .then(res => {
        console.log('favePeople GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deletePerson = (id, user) => {
    return axios({
        url: `${apiUrl}/saved/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}