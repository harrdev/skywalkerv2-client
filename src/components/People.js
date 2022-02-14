import { Link } from 'react-router-dom'
import { addPerson } from '../api/people'
import react from 'react'
const People = (props) => {
	
	const { user } = props
	const addToFave = (info) => {
		addPerson(info, user)
    }

	const peopleList = props.people.map((p, i) => {
		return (
			<li key={i}>
				<div>
					<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
				</div>
				<div id="buttonDiv">
				<button className="button" onClick={() => addToFave(p)}>Add To Favorites</button>
				</div>
			</li>
		)
	})

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