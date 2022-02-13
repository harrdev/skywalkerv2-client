import { useParams } from "react-router-dom";

const StarshipDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>Starship Details Page</h2>
		</div>
	)
}

export default StarshipDetails