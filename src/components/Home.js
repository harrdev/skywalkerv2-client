import react from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	

	return (
		<div className="home">
			<h2>Skywalker Academy</h2>
			<h3><Link to="./People">People</Link></h3>
		</div>
	)
}

export default Home
