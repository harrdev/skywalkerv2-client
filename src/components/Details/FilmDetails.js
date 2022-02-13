import { useParams } from "react-router-dom";

const FilmDetails = (props) => {
	
    const filmName = useParams()
	console.log("filmName params: ", filmName.name)
	const filmData = props.films.filter(films=> 
		films.title === filmName.name)
	const f = filmData[0]

	return (
		<div className="details">
			<h2>Film Details Page</h2>
			<h3>Title: {f.title}</h3>
			<h3>Episode ID: {f.episode_id}</h3>
			<h3>Opening Crawl:<br /> {f.opening_crawl}</h3>
			<h3>Director: {f.director}</h3>
			<h3>Producer: {f.producer}</h3>
			<h3>Release Date: {f.release_date}</h3>
		</div>
	)
}

export default FilmDetails