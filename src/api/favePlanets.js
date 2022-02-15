import apiUrl from '../apiConfig'
import axios from 'axios'

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