import { useParams } from "react-router";
import { useState, useEffect } from 'react'

const Details = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)
	// console.log('props in planets', props)
	// const [films, setFilms] = useState([])

	// useEffect(() => {
	// 	getAllfilms()
	// }, [])

	// const getAllfilms = () => {
	// 	getFilms()
	// 		.then((films) => {
    //             console.log("This is the films data: ", films.data.results[0].title)
	// 			const swfilms = films.data.results.map((title) => {
	// 				return title
	// 			})
	// 			setFilms(swfilms)
	// 		})
	// 		.catch(err => console.log(err))
	// }
	
	// const filmsList = films.map((p, i) => {
	// 	return (
	// 		<li key={i}>
	// 			<div className="name">{p.title}
	// 			</div>
	// 		</li>
	// 	)
	// })

	return (
		<div className="details">
			<h2>Details Page</h2>
		</div>
	)
}

export default Details