import { Link } from 'react-router-dom'

const Species = (props) => {
	console.log('props in planets', props)
	
	const speciesList = props.species.map((p, i) => {
		return (
			<li key={i}>
				<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
			</li>
		)
	})

	return (
		<div className="species">
			<h2>Species List</h2>
			<ul>
				{speciesList}
			</ul>
		</div>
	)
}

export default Species