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
                averageHeight: info.average_height,
                skinColors: info.skin_colors,
                hairColors: info.hair_colors,
                eyeColors: info.eye_colors,
                averageLifespan: info.average_lifespan,
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
        console.log('faveSpecies GET called')
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