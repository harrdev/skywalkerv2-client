import { useParams } from "react-router";
import { useState, useEffect } from 'react'

const FilmDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>Film Details Page</h2>
		</div>
	)
}

export default FilmDetails