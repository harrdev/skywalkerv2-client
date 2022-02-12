import { useParams } from "react-router";
import { useState, useEffect } from 'react'

const PlanetsDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>Planet Details Page</h2>
		</div>
	)
}

export default PlanetsDetails