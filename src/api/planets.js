import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPlanets = (res) => {
    return axios({
    method: 'GET',
    headers: {
        // "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/Planets'
})
    .then(res => {
        console.log("Get Planets called")
        return res
    })
    .catch((error) => console.log(error))
}