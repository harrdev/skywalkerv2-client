import apiUrl from '../apiConfig'
import axios from 'axios'

export const getSpecies = (res) => {
    return axios({
    method: 'GET',
    headers: {
        // "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/Species'
})
    .then(res => {
        console.log("Get Species called")
        return res
    })
    .catch((error) => console.log(error))
}