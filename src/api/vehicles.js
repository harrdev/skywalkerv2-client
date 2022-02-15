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
                costInCredits: info.cost_in_credits,
                length: info.length,
                crew: info.crew,
                maxSpeed: info.max_atmosphering_speed,
                passengers: info.passengers,
                cargoCapacity: info.cargo_capacity,
                consumables: info.consumables,
                vehicleClass: info.vehicle_class
            },
        },
    })
}