import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPeople = (res) => {
    return axios({
    method: 'GET',
    headers: {
        // "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/'
})
    .then(res => {
        console.log('getAsanas client API request sent', res.data.asanas)
        return res
    })
    .catch((error) => console.log(error))
}