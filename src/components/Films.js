import { Link } from 'react-router-dom'

const Films = (props) => {
	console.log('props in planets', props)
	const filmsList = props.films.map((p, i) => {
		return (
			<li key={i}>
				<Link to={`${p.title}`} style={{ fontSize: "25px", padding: "15px" }}>{p.title}</Link>
			</li>
		)
	})

	return (
		<div className="films">
			<h2>Films List</h2>
			<ul>
				{filmsList}
			</ul>
		</div>
	)
}

export default Films