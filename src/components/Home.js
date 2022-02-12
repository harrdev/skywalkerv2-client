import react from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)


	return (
		<div className="home">
			<h2>Skywalker Academy</h2>
			<h3><Link to="./People">People</Link></h3>
			<h3><Link to="./Planets">Planets</Link></h3>
			<h3><Link to="./Vehicles">Vehicles</Link></h3>
			<h3><Link to="./Species">Species</Link></h3>
			<h3><Link to="./Starships">Starships</Link></h3>
			<h3><Link to="./Films">Films</Link></h3>
		</div>
	)
}

export default Home
