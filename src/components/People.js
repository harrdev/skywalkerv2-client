import { Link } from 'react-router-dom'

const People = (props) => {
	// const { msgAlert, user } = props
	console.log('props in people', props)

    const peopleList = props.people.map((p, i) => {
		return (
			<li key={i}>
				<div className="name">{p.name}: Eye Color: {p.eye_color}
				</div>
			</li>
		)
	})
    
	return (
		<div className="people">
			<h2>People List</h2>
            <ul>
				{peopleList}
			</ul>
		</div>
	)
}

export default People