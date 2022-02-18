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
                rotation_period: info.rotation_period,
                orbital_period: info.orbital_period,
                diameter: info.diameter,
                terrain: info.terrain,
                climate: info.climate,
                gravity: info.gravity,
                surface_water: info.surface_water,
                population: info.population,
                films: info.films,
                residents: info.residents
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