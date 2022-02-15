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

export const getPlanets = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FavePlanets'
})
    .then(res => {
        console.log('favePlanets GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deletePlanets = (id, user) => {
    return axios({
        url: `${apiUrl}/FavePlanets/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}