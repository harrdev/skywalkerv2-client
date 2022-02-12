import { Link } from 'react-router-dom'

const Starships = (props) => {
	console.log('props in planets', props)
	
	const starshipsList = props.starships.map((p, i) => {
		return (
			<li key={i}>
				<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
			</li>
		)
	})

	return (
		<div className="starships">
			<h2>Starships List</h2>
			<ul>
				{starshipsList}
			</ul>
		</div>
	)
}

export default Starships