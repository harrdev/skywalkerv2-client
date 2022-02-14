import { getPeople } from '../api/favePeople'

const Saved = (props) => {
	const { user } = props

    getPeople(user)
    .then(res => {
        // console.log('This is our Res for GetFOllowedCoins ', res)
        // res = Object.values(res.data)
        console.log("Res is: ", res)
        // console.log('This is our Res for 2nd GetFOllowedCoins ', res)
        // setSavedCoins(res)
    })
	return (
		<div className="saved">
			<h2>Saved Data</h2>
			<ul>
			</ul>
		</div>
	)
}

export default Saved