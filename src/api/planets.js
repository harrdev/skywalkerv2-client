import apiUrl from '../apiConfig'
import axios from 'axios'

export const addPlanet = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Planets`,
        data: {
            info: {
                name: info.name,
                rotationPeriod: info.rotation_period,
                orbitalPeriod: info.orbitalPeriod,
                diameter: info.diameter,
                terrain: info.terrain,
                climate: info.climate,
                gravity: info.gravity,
                surfaceWater: info.surface_water,
                population: info.population,
            },
        },
    })
}