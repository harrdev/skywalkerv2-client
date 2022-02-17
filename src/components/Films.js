import { Link } from 'react-router-dom'
import { addFilms } from '../api/films'
import AddFilmForm from './AddFilmForm'

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
			<div className="list">
				<div className="uList">
				<h2>Films List</h2>
				<ul>
					{filmsList}
				</ul>
				</div>
			</div>
			<div className="addForm">
				<h2>Add new Film</h2>
				<AddFilmForm user={user} />
			</div>
		</div>
	)
}

export default Films