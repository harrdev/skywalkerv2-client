import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPeople = (res) => {
    console.log("getPeople res is: ", res)
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

export const deletePerson = (id, user) => {
    return axios({
        url: `${apiUrl}/saved/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}