import { Link } from 'react-router-dom'
import { addFilms } from '../../api/films'
import AddFilmForm from '../Forms/AddFilmForm'
import { useState } from 'react'

const Films = (props) => {
	
	const { user } = props

	const addToFave = (info) => {
		addFilms(info, user)
	}

	const filmsList = props.films.map((p, i) => {
		return (
			<li key={i}>
				<div>
					<Link to={`${p.title}`} style={{ fontSize: "25px", padding: "15px" }}>{p.title}</Link>
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
			<button onClick={props.addClick}>Add Film</button>
				<div className="uList">
				<h2>Films List</h2>
				<ul>
					{filmsList}
				</ul>
				</div>
			</div>
			<div className="addForm">
			{props.addButtonClick
					?
					<div className="listRight">
						<div className="addForm">
							<h2>Add Film</h2>
							<AddFilmForm user={user} />
						</div>
					</div>
					: ""}
			</div>
		</div>
	)
}

export default Films