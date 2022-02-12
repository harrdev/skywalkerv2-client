import apiUrl from '../apiConfig'
import axios from 'axios'

export const getStarships = (res) => {
    return axios({
    method: 'GET',
    headers: {
        // "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/Starships'
})
    .then(res => {
        console.log("Get Starships called")
        return res
    })
    .catch((error) => console.log(error))
}