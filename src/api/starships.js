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
                cost_in_credits: info.cost_in_credits,
                length: info.length,
                crew: info.crew,
                max_atmosphering_speed: info.max_atmosphering_speed,
                passengers: info.passengers,
                cargo_capacity: info.cargo_capacity,
                consumables: info.consumables,
                starship_class: info.starship_class,
                MGLT: info.MGLT,
                hyperdrive_rating: info.hyperdrive_rating
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