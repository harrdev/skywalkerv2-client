import apiUrl from '../apiConfig'
import axios from 'axios'

export const addNewPerson = (info, user) => {
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

export const addNewPlanet = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/newPlanet/Planet`,
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
            },
        },
    })
}

export const addNewVehicle = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/newVehicle/Vehicle`,
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

export const addNewSpecies = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/newSpecies/Species`,
        data: {
            info: {
                name: info.name,
                classification: info.classification,
                average_height: info.average_height,
                skin_colors: info.skin_colors,
                hair_colors: info.hair_colors,
                eye_colors: info.eye_colors,
                average_lifespan: info.average_lifespan,
                language: info.language,
            },
        },
    })
}

export const addNewStarship = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/newStarship/Starship`,
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

export const addNewFilm = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/newFilm/Film`,
        data: {
            info: {
                title: info.title,
                episode_id: info.episode_id,
                opening_crawl: info.opening_crawl,
                director: info.director,
                producer: info.producer,
                release_date: info.release_date
            },
        },
    })
}

export const editPerson = (info, user, id) => {
    return axios({
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/People/${id}`,
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

export const editPlanet = (info, user, id) => {
    return axios({
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Planets/${id}`,
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
            },
        },
    })
}

export const editVehicle = (info, user, id) => {
    return axios({
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Vehicles/${id}`,
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
                vehicle_class: info.vehicle_class
            },
        },
    })
}

export const editStarship = (info, user, id) => {
    return axios({
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Starships/${id}`,
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

export const editFilm = (info, user, id) => {
    return axios({
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Films/${id}`,
        data: {
            info: {
                title: info.title,
                episode_id: info.episode_id,
                opening_crawl: info.opening_crawl,
                director: info.director,
                producer: info.producer,
                release_date: info.release_date
            },
        },
    })
}

export const editSpecies = (info, user, id) => {
    return axios({
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Species/${id}`,
        data: {
            info: {
                name: info.name,
                classification: info.classification,
                average_height: info.average_height,
                skin_colors: info.skin_colors,
                hair_colors: info.hair_colors,
                eye_colors: info.eye_colors,
                average_lifespan: info.average_lifespan,
                language: info.language
            },
        },
    })
}