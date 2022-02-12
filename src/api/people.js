import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPeople = (res) => {
    return axios({
    method: 'GET',
    // headers: {
    //     "Authorization": `Bearer ${res.token}`
    // },
    url: apiUrl + '/People'
})
    .then(res => {
        console.log('getPeople called')
        return res
    })
    .catch((error) => console.log(error))
}