import apiUrl from '../apiConfig'
import axios from 'axios'

export const getSWData = (res) => {
    return axios({
    method: 'GET',
    // headers: {
    //     "Authorization": `Bearer ${res.token}`
    // },
    url: apiUrl + '/'
})
    .then(res => {
        console.log('getSWData called')
        return res
    })
    .catch((error) => console.log(error))
}