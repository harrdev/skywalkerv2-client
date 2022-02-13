import apiUrl from '../apiConfig'
import axios from 'axios'

export const getHomeworld = (res) => {
    console.log("res from getHomeworld: ", res.name)
    console.log("hopefully URL: ", res.homeworld)
    return axios({
    method: 'GET',
    // headers: {
    //     "Authorization": `Bearer ${res.token}`
    // },
    url: `${apiUrl}/People/${res.name}`,
    data: {
        name: res.name
    }
})
    .then(res => {
        console.log('getHomeworld called')
        return res
    })
    .catch((error) => console.log(error))
}