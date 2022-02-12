import apiUrl from '../apiConfig'
import axios from 'axios'

export const getVehicles = (res) => {
    return axios({
    method: 'GET',
    headers: {
        // "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/Vehicles'
})
    .then(res => {
        console.log("Get Vehicles called")
        return res
    })
    .catch((error) => console.log(error))
}