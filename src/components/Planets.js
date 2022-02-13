import { Link } from 'react-router-dom'

const Planets = (props) => {
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
	const planetsList = props.planets.map((p, i) => {
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
		<div className="planets">
			<h2>Planets List</h2>
			<ul>
				{planetsList}
			</ul>
		</div>
	)
}

export default Planets