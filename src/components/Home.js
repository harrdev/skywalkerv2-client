const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const peopleList = props.people.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}: Eye Color: {p.eye_color}
				</div>
			</li>
		)
	})

	return (
		<div className="home">
			<h2>Skywalker Academy</h2>
			<h3>People</h3>
			<ul>
				{peopleList}
			</ul>
		</div>
	)
}

export default Home
