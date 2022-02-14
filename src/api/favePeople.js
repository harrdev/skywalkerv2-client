import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPeople = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/saved'
})
    .then(res => {
        console.log('favePeople GET called')
        return res
    })
    .catch((error) => console.log(error))
}