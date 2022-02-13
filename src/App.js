import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import axios from 'axios'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import People from './components/People'
import Planets from './components/Planets'
import Vehicles from './components/Vehicles'
import Species from './components/Species'
import Starships from './components/Starships'
import Films from './components/Films'
import PeopleDetails from './components/Details/PeopleDetails'
import PlanetsDetails from './components/Details/PlanetsDetails'
import VehicleDetails from './components/Details/VehicleDetails'
import StarshipsDetails from './components/Details/StarshipDetails'
import FilmDetails from './components/Details/FilmDetails'
import SpeciesDetails from './components/Details/SpeciesDetails'

const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])
	const [films, setFilms] = useState([])
	const [species, setSpecies] = useState([])
	const [starships, setStarships] = useState([])
	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		getAllPeople()
		getAllPlanets()
		getAllFilms()
		getAllSpecies()
		getAllStarships()
		getAllVehicles()
	}, [])

	const getAllVehicles = () => {
		let endpoints = [
			'http://swapi.dev/api/vehicles/?page=1',
			'http://swapi.dev/api/vehicles/?page=2',
			'http://swapi.dev/api/vehicles/?page=3',
			'http://swapi.dev/api/vehicles/?page=4'
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				let vehicleArray = []
				res.map((vehicle) => {
					vehicle.data.results.map(p => {
						vehicleArray.push(p)
					})
				})
				setVehicles(vehicleArray)
			})
	}

	const getAllStarships = () => {
		let endpoints = [
			'http://swapi.dev/api/starships/?page=1',
			'http://swapi.dev/api/starships/?page=2',
			'http://swapi.dev/api/starships/?page=3',
			'http://swapi.dev/api/starships/?page=4'
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				let starshipArray = []
				res.map((starship) => {
					starship.data.results.map(p => {
						starshipArray.push(p)
					})
				})
				setStarships(starshipArray)
			})
	}

	const getAllSpecies = () => {
		let endpoints = [
			'http://swapi.dev/api/species/?page=1',
			'http://swapi.dev/api/species/?page=2',
			'http://swapi.dev/api/species/?page=3',
			'http://swapi.dev/api/species/?page=4'
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				let speciesArray = []
				res.map((species) => {
					species.data.results.map(s => {
						speciesArray.push(s)
					})
				})
				setSpecies(speciesArray)
			})
	}

	// const getAllfilms = () => {
	// 	getFilms()
	// 		.then((films) => {
	// 			const swfilms = films.data.results.map((title) => {
	// 				return title
	// 			})
	// 			setFilms(swfilms)
	// 		})
	// 		.catch(err => console.log(err))
	// }
	const getAllFilms = () => {
		let endpoints = [
			'http://swapi.dev/api/films/?page=1',
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				setFilms(res[0].data.results)
			})
	}

	const getAllPlanets = () => {
		let endpoints = [
			'http://swapi.dev/api/planets/?page=1',
			'http://swapi.dev/api/planets/?page=2',
			'http://swapi.dev/api/planets/?page=3',
			'http://swapi.dev/api/planets/?page=4',
			'http://swapi.dev/api/planets/?page=5',
			'http://swapi.dev/api/planets/?page=6'
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				let planetArray = []
				res.map((planet) => {
					planet.data.results.map(p => {
						planetArray.push(p)
					})
				})
				setPlanets(planetArray)
			})
	}

	const getAllPeople = () => {
		let endpoints = [
			'http://swapi.dev/api/people/?page=1',
			'http://swapi.dev/api/people/?page=2',
			'http://swapi.dev/api/people/?page=3',
			'http://swapi.dev/api/people/?page=4',
			'http://swapi.dev/api/people/?page=5',
			'http://swapi.dev/api/people/?page=6',
			'http://swapi.dev/api/people/?page=7',
			'http://swapi.dev/api/people/?page=8',
			'http://swapi.dev/api/people/?page=9',
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				let peopleArray = []
				res.map((person) => {
					person.data.results.map(p => {
						peopleArray.push(p)
					})
				})
				setPeople(peopleArray)
			})
	}
	
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route path='/People'
					element={<People msgAlert={msgAlert} user={user} people={people} />}
				/>
				<Route path='/Planets'
					element={<Planets msgAlert={msgAlert} user={user} planets={planets} />}
				/>
				<Route path='/Vehicles'
					element={<Vehicles msgAlert={msgAlert} user={user} vehicles={vehicles} />}
				/>
				<Route path='/Species'
					element={<Species msgAlert={msgAlert} user={user} species={species} />}
				/>
				<Route path='/Starships'
					element={<Starships msgAlert={msgAlert} user={user} starships={starships} />}
				/>
				<Route path='/Films'
					element={<Films msgAlert={msgAlert} user={user} films={films} />}
				/>
				<Route path='People/:name'
					element={<PeopleDetails msgAlert={msgAlert} user={user} planets={planets} people={people} />}
				/>
				<Route path='Planets/:name'
					element={<PlanetsDetails msgAlert={msgAlert} user={user} people={people} planets={planets} />}
				/>
				<Route path='Vehicles/:name'
					element={<VehicleDetails msgAlert={msgAlert} user={user} vehicles={vehicles} />}
				/>
				<Route path='Films/:name'
					element={<FilmDetails msgAlert={msgAlert} user={user} films={films} />}
				/>
				<Route path='Species/:name'
					element={<SpeciesDetails msgAlert={msgAlert} user={user} people={people} species={species} />}
				/>
				<Route path='Starships/:name'
					element={<StarshipsDetails msgAlert={msgAlert} user={user} starships={starships} />}
				/>
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
