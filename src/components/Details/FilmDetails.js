import { useParams } from "react-router-dom";

const FilmDetails = (props) => {

	const filmName = useParams()
	const filmData = props.films.filter(films =>
		films.title === filmName.name)
	const f = filmData[0]

	const filmCharacters = props.swapiPeople.filter(character => f.characters.includes(character.url))
		.map((person, i) => {
			return (
				<li key={i}>
					{person.name}
				</li>
			)
		})

	return (
		<div className="container2">
			<h1>Title: {f.title}</h1>
			<h3>Episode ID: {f.episode_id}</h3>
			<h3>Opening Crawl:<br /> {f.opening_crawl}</h3>
			<h3>Director: {f.director}</h3>
			<h3>Producer: {f.producer}</h3>
			<h3>Release Date: {f.release_date}</h3>
			<h3>Characters in film:
				<ul>
					{filmCharacters}
				</ul>
			</h3>
		</div>
	)
}

export default FilmDetails