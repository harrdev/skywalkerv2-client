import apiUrl from '../apiConfig'
import axios from 'axios'

export const getVehicles = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveVehicles'
})
    .then(res => {
        console.log('faveVehicles GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteVehicles = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveVehicles/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}