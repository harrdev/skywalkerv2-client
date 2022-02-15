import apiUrl from '../apiConfig'
import axios from 'axios'

export const getFilms = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveFilms'
})
    .then(res => {
        console.log('faveFilms GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteFilms = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveFilms/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}