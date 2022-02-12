import apiUrl from '../apiConfig'
import axios from 'axios'

export const getFilms = (res) => {
    return axios({
    method: 'GET',
    headers: {
        // "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/Films'
})
    .then(res => {
        console.log("Get Films called")
        return res
    })
    .catch((error) => console.log(error))
}