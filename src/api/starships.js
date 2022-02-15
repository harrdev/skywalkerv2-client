import apiUrl from '../apiConfig'
import axios from 'axios'

export const addStarships = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Starships`,
        data: {
            info: {
                name: info.name,
                model: info.model,
                manufacturer: info.manufacturer,
                costInCredits: info.cost_in_credits,
                length: info.length,
                crew: info.crew,
                maxSpeed: info.max_atmosphering_speed,
                passengers: info.passengers,
                cargoCapacity: info.cargo_capacity,
                consumables: info.consumables,
                starshipClass: info.starship_class,
                mglt: info.mglt,
                hyperdriveRating: info.hyperdrive_rating

            },
        },
    })
}

export const getStarships = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveStarships'
})
    .then(res => {
        console.log('faveStarships GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteStarships = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveStarships/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}