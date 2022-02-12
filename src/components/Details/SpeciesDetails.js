import { useParams } from "react-router";
import { useState, useEffect } from 'react'

const SpeciesDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>Species Details Page</h2>
		</div>
	)
}

export default SpeciesDetails