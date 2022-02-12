import { useParams } from "react-router";
import { useState, useEffect } from 'react'

const PeopleDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>People Details Page</h2>
		</div>
	)
}

export default PeopleDetails