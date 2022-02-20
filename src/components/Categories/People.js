import { Link } from 'react-router-dom'
import { addPerson } from '../../api/people'
import AddPersonForm from '../Forms/AddPersonForm'
import { useState } from 'react'

const People = (props) => {

	const { user } = props
	const [inputText, setInputText] = useState("")

	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase()
		setInputText(lowerCase)
	}

	const filteredData = props.people.filter((el) => {
		if (inputText === '') {
			return el;
		}
		else {
			return el.name.toLowerCase().includes(inputText)
		}
	})

	const addToFave = (info) => {
		addPerson(info, user)
	}

	return (
		<div className="container">
			<div className="listLeft">
				{props.addButtonClick
					?
					<div className="listRight">
						<button onClick={props.addClick}>Cancel</button>
						<div className="addForm">
							<h2>Add Person</h2>
							<AddPersonForm user={user} />
						</div>
					</div>
					: ""}
			</div>
			<div className="listRight">
				<button onClick={props.addClick}>Add New Person</button>
				<div className="uList">
					<h2>People List</h2>
					<input onChange={inputHandler} type="search" value={inputText} placeholder="Search for person" />
					<ul>
						{filteredData.map((person, i) => (
							<li key={i}>
								<div>
									<Link to={`${person.name}`} style={{ fontSize: "25px", padding: "15px" }}>{person.name}</Link>
								</div>
								<div id="buttonDiv">
									<button className="button" onClick={() => addToFave(person)}>Add To Favorites</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default People