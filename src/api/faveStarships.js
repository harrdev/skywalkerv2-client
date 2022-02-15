import apiUrl from '../apiConfig'
import axios from 'axios'

export const getStarships = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveStarships'
})
    .then(res => {
        console.log('faveStarships GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteStarships = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveStarships/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}