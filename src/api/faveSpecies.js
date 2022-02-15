import apiUrl from '../apiConfig'
import axios from 'axios'

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