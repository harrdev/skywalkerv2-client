import apiUrl from '../apiConfig'
import axios from 'axios'

export const addSpecies = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Species`,
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

export const getSpecies = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveSpecies'
})
    .then(res => {
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteSpecies = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveSpecies/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}