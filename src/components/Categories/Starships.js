import { Link } from 'react-router-dom'
import { addStarships } from '../../api/starships'
import AddStarshipForm from '../Forms/AddStarshipForm'
import { useState } from 'react'

const Starships = (props) => {
	const { user } = props
	const [inputText, setInputText] = useState("")

	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase()
		setInputText(lowerCase)
	}

	const filteredData = props.starships.filter((el) => {
		if (inputText === '') {
			return el;
		}
		else {
			return el.name.toLowerCase().includes(inputText)
		}
	})

	const addToFave = (info) => {
		addStarships(info, user)
		console.log("Add to fave button clicked")
		alert("Starship added to your favorites")
	}

	return (
		<div className="container">
			<div className="listLeft">
				{props.addButtonClick
					?
					<div className="listRight">
						<button onClick={props.addClick}>Cancel</button>
						<div className="addForm">
							<h2>Add Starship</h2>
							<AddStarshipForm user={user} />
						</div>
					</div>
					: ""}
			</div>
			<div className="listRight">
				<button onClick={props.addClick}>Add Starship</button>
				<input onChange={inputHandler} type="search" value={inputText} placeholder="Search for starship" />
				<div className="uList">
					<h2>Starship List</h2>
					<ul>
					{filteredData.map((starship, i) => (
							<li key={i}>
								<div>
									<Link to={`${starship.name}`} style={{ fontSize: "25px", padding: "15px" }}>{starship.name}</Link>
								</div>
								<div id="buttonDiv">
									<button className="button" onClick={() => addToFave(starship)}>Add To Favorites</button>
								</div>
							</li>
						))}
					</ul>
				</div>

			</div>
		</div>
	)
}

export default Starships