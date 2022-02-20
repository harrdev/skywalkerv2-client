import { Link } from 'react-router-dom'
import { addFilms } from '../../api/films'
import AddFilmForm from '../Forms/AddFilmForm'
import { useState } from 'react'

const Films = (props) => {

	const { user } = props
	const [inputText, setInputText] = useState("")

	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase()
		setInputText(lowerCase)
	}

	const filteredData = props.films.filter((el) => {
		if (inputText === '') {
			return el
		}
		else {
			return el.title.toLowerCase().includes(inputText)
		}
	})

	const addToFave = (info) => {
		addFilms(info, user)
	}

	return (
		<div className="container">
			<div className="listLeft">
				{props.addButtonClick
					?
					<div className="listRight">
						<button onClick={props.addClick}>Cancel</button>
						<div className="addForm">
							<h2>Add Film</h2>
							<AddFilmForm user={user} />
						</div>
					</div>
					: ""}
			</div>
			<div className="addForm">
				<button onClick={props.addClick}>Add Film</button>
				<input onChange={inputHandler} type="search" value={inputText} placeholder="Search for film" />
				<div className="uList">
					<h2>Films List</h2>
					<ul>
						{filteredData.map((film, i) => (
							<li key={i}>
								<div>
									<Link to={`${film.title}`} style={{ fontSize: "25px", padding: "15px" }}>{film.title}</Link>
								</div>
								<div id="buttonDiv">
									<button className="button" onClick={() => addToFave(film)}>Add To Favorites</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Films