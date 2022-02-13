import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const PlanetDetails = (props) => {
	const planetName = useParams()

	const planet = props.planets.filter(planet => planet.name === planetName.name)
	const p = planet[0]

	const planetResidents = props.people.filter(person => p.residents.includes(person.url))
	.map((person =>  {
		return ( 
		<li>
			{person.name}
		</li>
		)
	}))

	return (
		<div className="details">
			<h2>Planet Details Page</h2>
			<h3>Name: {p.name}</h3>
			<h3>Rotation Period: {p.rotation_period}</h3>
			<h3>Orbital Period: {p.orbital_period}</h3>
			<h3>Diameter: {p.diameter}</h3>
			<h3>Climate: {p.climate}</h3>
			<h3>Gravity: {p.gravity}</h3>
			<h3>Terrain: {p.terrain}</h3>
			<h3>Surface Water: {p.surface_water}</h3>
			<h3>Population: {p.population}</h3>
			<h3>Residents: 
				<ul>
					{planetResidents}
				</ul>
			</h3>
		</div>
	)
}

export default PlanetDetails