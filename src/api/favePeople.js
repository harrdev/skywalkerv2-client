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

export const deletePerson = (id, user) => {
    console.log('This is the id of person to Delete: ', id)
    console.log('This is the user: ', user)
    return axios({
        url: `${apiUrl}/saved/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}