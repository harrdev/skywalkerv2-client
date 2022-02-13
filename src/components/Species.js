import { Link } from 'react-router-dom'

const Species = (props) => {
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
	const speciesList = props.species.map((p, i) => {
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
		<div className="species">
			<h2>Species List</h2>
			<ul>
				{speciesList}
			</ul>
		</div>
	)
}

export default Species