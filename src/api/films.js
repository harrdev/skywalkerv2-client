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
                episodeId: info.episode_id,
                openingCrawl: info.openingCrawl,
                director: info.director,
                producer: info.producer,
                releaseDate: info.release_date
            },
        },
    })
}