import { Link } from 'react-router-dom'
import { addSpecies } from '../../api/species'
import AddSpeciesForm from '../Forms/AddSpeciesForm'
import { useState } from 'react'

const Species = (props) => {
	const { user } = props
	const [inputText, setInputText] = useState("")

	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase()
		setInputText(lowerCase)
	}

	const filteredData = props.species.filter((el) => {
		if (inputText === '') {
			return el;
		}
		else {
			return el.name.toLowerCase().includes(inputText)
		}
	})

	const addToFave = (info) => {
		addSpecies(info, user)
	}

	return (
		<div className="container">
			<div className="listLeft">
				{props.addButtonClick
					?
					<div className="listRight">
						<button onClick={props.addClick}>Cancel</button>
						<div className="addForm">
							<h2>Add Species</h2>
							<AddSpeciesForm user={user} />
						</div>
					</div>
					: ""}
			</div>
			<div className="listRight">
				<button onClick={props.addClick}>Add Species</button>
				<input onChange={inputHandler} type="search" value={inputText} placeholder="Search for species" />
				<div className="uList">
					<h2>Species List</h2>
					<ul>
					{filteredData.map((species, i) => (
							<li key={i}>
								<div>
									<Link to={`${species.name}`} style={{ fontSize: "25px", padding: "15px" }}>{species.name}</Link>
								</div>
								<div id="buttonDiv">
									<button className="button" onClick={() => addToFave(species)}>Add To Favorites</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Species