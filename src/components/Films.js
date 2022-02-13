import { Link } from 'react-router-dom'
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
const Films = (props) => {
	const filmsList = props.films.map((p, i) => {
		return (
			<li key={i}>
				<div>
					<Link to={`${p.title}`} style={{ fontSize: "25px", padding: "15px" }}>{p.title}</Link>
				</div>
				<div id="buttonDiv">
					<button className="button" onClick={() => addToFave(p)}>Add To Favorites</button>
				</div>
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