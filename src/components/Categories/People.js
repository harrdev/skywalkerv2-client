import { Link } from 'react-router-dom'
import { addPerson } from '../../api/people'
import AddPersonForm from '../Forms/AddPersonForm'

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
		<div className="container">
			<div className="listLeft">
				<div className="uList">
					<h2>People List</h2>
					<ul>
						{peopleList}
					</ul>
				</div>
			</div>
			<div className="listRight">
				<div className="addForm">
					<h2>Add new person</h2>
					<AddPersonForm user={user} people={props.people} />
				</div>
			</div>
		</div>
	)
}

export default People