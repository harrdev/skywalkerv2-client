import { Link } from 'react-router-dom'
import { addPlanet } from '../../api/planets'
import AddPlanetForm from '../Forms/AddPlanetForm'
import { useState } from 'react'

const Planets = (props) => {
	const { user } = props
	const [inputText, setInputText] = useState("")

	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase()
		setInputText(lowerCase)
	}

	const filteredData = props.planets.filter((el) => {
		if (inputText === '') {
			return el;
		}
		else {
			return el.name.toLowerCase().includes(inputText)
		}
	})

	const addToFave = (info) => {
		addPlanet(info, user)
	}

	return (
		<div className="container">
			<div className="listLeft">
				{props.addButtonClick
					?
					<div className="listRight">
						<button onClick={props.addClick}>Cancel</button>
						<div className="addForm">
							<h2>Add Planet</h2>
							<AddPlanetForm user={user} />
						</div>
					</div>
					: ""}
			</div>
			<div className="listRight">
				<button onClick={props.addClick}>Add Planet</button>
				<input onChange={inputHandler} type="search" value={inputText} placeholder="Search for planet" />
				<div className="uList">
					<h2>Planet List</h2>
					<ul>{filteredData.map((planet, i) => (
						<li key={i}>
							<div>
								<Link to={`${planet.name}`} style={{ fontSize: "25px", padding: "15px" }}>{planet.name}</Link>
							</div>
							<div id="buttonDiv">
								<button className="button" onClick={() => addToFave(planet)}>Add To Favorites</button>
							</div>
						</li>
					))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Planets