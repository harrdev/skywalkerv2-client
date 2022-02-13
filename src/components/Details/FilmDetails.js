import { useParams } from "react-router";

const FilmDetails = (props) => {
    const swdata = useParams()
    console.log("Props in details: ", props)

	return (
		<div className="details">
			<h2>Film Details Page</h2>
		</div>
	)
}

export default FilmDetails