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
import Dashboard from './components/Dashboard'
import Saved from './components/Favorites/Favorites'
import People from './components/Categories/People'
import Planets from './components/Categories/Planets'
import Vehicles from './components/Categories/Vehicles'
import Species from './components/Categories/Species'
import Starships from './components/Categories/Starships'
import Films from './components/Categories/Films'
import PeopleDetails from './components/Details/PeopleDetails'
import PlanetsDetails from './components/Details/PlanetsDetails'
import VehicleDetails from './components/Details/VehicleDetails'
import StarshipsDetails from './components/Details/StarshipDetails'
import FilmDetails from './components/Details/FilmDetails'
import SpeciesDetails from './components/Details/SpeciesDetails'
import FavePlanets from './components/Favorites/FavePlanets'
import FavePeople from './components/Favorites/FavePeople'
import FaveSpecies from './components/Favorites/FaveSpecies'
import FaveVehicles from './components/Favorites/FaveVehicles'
import FaveStarships from './components/Favorites/FaveStarships'
import FaveFilms from './components/Favorites/FaveFilms'
import Favorites from './components/Favorites/Favorites'
import FavePeopleDetails from './components/Details/FavePeopleDetails'
import FavePlanetDetails from './components/Details/FavePlanetDetails'
import FaveVehicleDetails from './components/Details/FaveVehicleDetails'
import FaveStarshipDetails from './components/Details/FaveStarshipDetails'
import FaveFilmDetails from './components/Details/FaveFilmDetails'
import FaveSpeciesDetails from './components/Details/FaveSpeciesDetails'

const App = () => {
	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])
	const [films, setFilms] = useState([])
	const [species, setSpecies] = useState([])
	const [starships, setStarships] = useState([])
	const [vehicles, setVehicles] = useState([])
	const [swapiPeople, setSwapiPeople] = useState([])
	const [addButtonClick, setAddButtonClick] = useState(false)
	
	useEffect(() => {
		getSwapiPeople()
		getAllPeople()
		getAllPlanets()
		getAllFilms()
		getAllSpecies()
		getAllStarships()
		getAllVehicles()
		console.log("SWAPI axios calls made")
	}, [user])

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

	const getAllFilms = () => {
		let endpoints = [
			'http://swapi.dev/api/films/?page=1'
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				setFilms(res[0].data.results)
			})
	}

	const getSwapiPeople = () => {
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
				res.map((people) => {
					people.data.results.map(p => {
						peopleArray.push(p)
					})
				})
				setSwapiPeople(peopleArray)
			})
	}

	const getAllPeople = () => {
		let endpoints = [
			'https://akabab.github.io/starwars-api/api/all.json',
		];
		Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				let peopleArray = []
				res[0].data.map((people) => {
					peopleArray.push(people)
				})
				setPeople(peopleArray)
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

	const addClick = () => {
		if (!addButtonClick) {
			setAddButtonClick(true)
		} else {
			setAddButtonClick(false)
		}
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route path='/Dashboard'
					element={
						<RequireAuth user={user}>
							<Dashboard msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/Favorites'
					element={
						<RequireAuth user={user}>
							<Favorites msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/FavePlanets'
					element={
						<RequireAuth user={user}>
							<FavePlanets msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/FaveFilms'
					element={
						<RequireAuth user={user}>
							<FaveFilms msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/FaveStarships'
					element={
						<RequireAuth user={user}>
							<FaveStarships msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/FaveSpecies'
					element={
						<RequireAuth user={user}>
							<FaveSpecies msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/FaveVehicles'
					element={
						<RequireAuth user={user}>
							<FaveVehicles msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/FavePeople'
					element={
						<RequireAuth user={user}>
							<FavePeople msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route path='/Film/:id'
					element={
						<RequireAuth user={user}>
							<FaveFilmDetails msgAlert={msgAlert} user={user} addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/People/:id'
					element={
						<RequireAuth user={user}>
							<FavePeopleDetails msgAlert={msgAlert} user={user} addClick={addClick} addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick} />
						</RequireAuth>}
				/>
				<Route path='/Species/:id'
					element={
						<RequireAuth user={user}>
							<FaveSpeciesDetails msgAlert={msgAlert} user={user} addClick={addClick}addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick} />
						</RequireAuth>}
				/>
				<Route path='/Planets/:id'
					element={
						<RequireAuth user={user}>
							<FavePlanetDetails msgAlert={msgAlert} user={user} films={films} swapiPeople={swapiPeople} planets={planets}addClick={addClick} addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Vehicles/:id'
					element={
						<RequireAuth user={user}>
							<FaveVehicleDetails msgAlert={msgAlert} user={user} addClick={addClick} addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Starships/:id'
					element={
						<RequireAuth user={user}>
							<FaveStarshipDetails msgAlert={msgAlert} user={user} addClick={addClick} addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Dashboard/People'
					element={
						<RequireAuth user={user}>
							<People msgAlert={msgAlert} user={user} people={people} addClick={addClick} addButtonClick={addButtonClick} setAddButtonClick={setAddButtonClick} />
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Planets'
					element={
						<RequireAuth user={user}><Planets msgAlert={msgAlert} user={user} planets={planets} addClick={addClick} addButtonClick={addButtonClick}/> </RequireAuth>}
				/>
				<Route path='/Dashboard/Vehicles'
					element={
						<RequireAuth user={user}><Vehicles msgAlert={msgAlert} user={user} vehicles={vehicles} addClick={addClick} addButtonClick={addButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Species'
					element={
						<RequireAuth user={user}><Species msgAlert={msgAlert} user={user} species={species} addClick={addClick} addButtonClick={addButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Starships'
					element={
						<RequireAuth user={user}><Starships msgAlert={msgAlert} user={user} starships={starships} addClick={addClick} addButtonClick={addButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Films'
					element={
						<RequireAuth user={user}><Films msgAlert={msgAlert} user={user} films={films} addClick={addClick} addButtonClick={addButtonClick}/>
						</RequireAuth>}
				/>
				<Route path='/Dashboard/People/:name'
					element={
						<RequireAuth user={user}><PeopleDetails msgAlert={msgAlert} user={user} planets={planets} people={people} />
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Planets/:name'
					element={
						<RequireAuth user={user}><PlanetsDetails 
						msgAlert={msgAlert}
						user={user} 
						people={people} 
						planets={planets} 
						films={films}  
						swapiPeople={swapiPeople} />
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Vehicles/:name'
					element={
						<RequireAuth user={user}><VehicleDetails msgAlert={msgAlert} user={user} vehicles={vehicles} />
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Films/:name'
					element={
						<RequireAuth user={user}><FilmDetails msgAlert={msgAlert} user={user} films={films} />
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Species/:name'
					element={
						<RequireAuth user={user}><SpeciesDetails msgAlert={msgAlert} user={user} people={people} species={species}  swapiPeople={swapiPeople} />
						</RequireAuth>}
				/>
				<Route path='/Dashboard/Starships/:name'
					element={
						<RequireAuth user={user}><StarshipsDetails msgAlert={msgAlert} user={user} starships={starships} />
						</RequireAuth>}
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
			{
				msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))
			}
		</Fragment >
	)
}

export default App
