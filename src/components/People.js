import { Link } from 'react-router-dom'
import { addPerson } from '../api/people'
const People = (props) => {
	
	const addToFave = (info, user) => {
        // createFollowedCoin(info, user)
		addPerson(info, user)
        //     .then(res => {
        //         getFollowedCoins(user)
        //             .then(res => {
        //                 // console.log('This is our Res for GetFOllowedCoins ', res)
        //                 res = Object.values(res.data.coins)
        //                 // console.log('This is our Res for 2nd GetFOllowedCoins ', res)
        //                 props.setSavedCoins(res)
        //             })
        //     })
    }
	const peopleList = props.people.map((p, i) => {
		return (
			<li key={i}>
				<div>
					<Link to={`${p.name}`} style={{ fontSize: "25px", padding: "15px" }}>{p.name}</Link>
				</div>
				<div id="buttonDiv">
				<button className="button" onClick={() => addToFave(p)}>Add To Favorites</button>
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