import { useParams } from "react-router-dom";
import { addSpecies } from "../../api/species";

const SpeciesDetails = (props) => {
  const species = useParams();
  const speciesData = props.species.filter(
    (speciesData) => speciesData.name === species.id
  );
  const s = speciesData[0];

  const speciesPeople = props.swapiPeople
    .filter((person) => s.people.includes(person.url))
    .map((person, i) => {
      return <li key={i}>{person.name}</li>;
    });

  const addToFave = (info) => {
    addSpecies(info, props.user);
    alert("Species added to your favorites");
  };

  return (
    <div className="container2">
      <div id="buttonDiv">
        <button className="button" onClick={() => addToFave(s)}>
          Add To Favorites
        </button>
      </div>
      <h1>Name: {s.name}</h1>
      <h3>Classification: {s.classification}</h3>
      <h3>Average Height: {s.average_height}</h3>
      <h3>Skin Colors: {s.skin_colors}</h3>
      <h3>Hair Colors: {s.hair_colors}</h3>
      <h3>Eye Colors: {s.eye_colors}</h3>
      <h3>Average Lifespan: {s.average_lifespan}</h3>
      <h3>Language: {s.language}</h3>
      <h3>
        People of this species:
        <ul>{speciesPeople}</ul>
      </h3>
    </div>
  );
};

export default SpeciesDetails;
