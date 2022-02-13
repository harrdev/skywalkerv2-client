import { useParams } from "react-router-dom";

const VehicleDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>Vehicle Details Page</h2>
		</div>
	)
}

export default VehicleDetails