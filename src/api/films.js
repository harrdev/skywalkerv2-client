import apiUrl from '../apiConfig'
import axios from 'axios'

export const addFilms = (info, user) => {
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + `/Films`,
        data: {
            info: {
                title: info.title,
                episode_id: info.episode_id,
                opening_crawl: info.opening_crawl,
                director: info.director,
                producer: info.producer,
                release_date: info.release_date
            },
        },
    })
}

export const getFilms = (res) => {
    return axios({
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${res.token}`
    },
    url: apiUrl + '/FaveFilms'
})
    .then(res => {
        console.log('faveFilms GET called')
        return res
    })
    .catch((error) => console.log(error))
}

export const deleteFilms = (id, user) => {
    return axios({
        url: `${apiUrl}/FaveFilms/${id}`,
        method: 'DELETE',
        headers: {
        	Authorization: `Token token=${user.token}`,
        },
    })
}