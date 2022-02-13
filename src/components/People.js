import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
const People = (props) => {

	const peopleList = props.people.map((p, i) => {
		return (
			<li key={i}>
				<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
			</li>
		)
	})
	console.log("PeopleList is : ", peopleList)

	return (
		<div className="people">
			<h2>People List</h2>
			<ul>
				{peopleList}
			</ul>
		</div>
	)
}

export default People