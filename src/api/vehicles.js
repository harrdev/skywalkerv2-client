import apiUrl from '../apiConfig'
import axios from 'axios'

export const addVehicles = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Vehicles`,
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
                vehicle_class: info.vehicle_class,
            },
        },
    })
}

export const getVehicles = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveVehicles'
})
    .then(res => {
        console.log('faveVehicles GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteVehicles = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveVehicles/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}