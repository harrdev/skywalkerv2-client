import { Link } from 'react-router-dom'

const Vehicles = (props) => {
	const addToFave = (info) => {
		// createFollowedCoin(info, user)
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
	const vehiclesList = props.vehicles.map((p, i) => {
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
		<div className="vehicles">
			<h2>Vehicles List</h2>
			<ul>
				{vehiclesList}
			</ul>
		</div>
	)
}

export default Vehicles