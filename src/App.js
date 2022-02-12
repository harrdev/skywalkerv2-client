import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
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
import Details from './components/Details'
import { getPeople } from './api/people'
import { getPlanets } from './api/planets'
import { getFilms } from './api/films'
import { getSpecies } from './api/species'
import { getStarships } from './api/starships'
import { getVehicles } from './api/vehicles'

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
		getAllfilms()
		getAllspecies()
		getAllstarships()
		getAllVehicles()
	}, [])

	const getAllVehicles = () => {
		getVehicles()
			.then((vehicles) => {
				console.log("This is the vehicles data: ", vehicles)
				const swvehicles = vehicles.data.results.map((name) => {
					return name
				})
				setVehicles(swvehicles)
			})
			.catch(err => console.log(err))
	}

	const getAllstarships = () => {
		getStarships()
			.then((starships) => {
				console.log("This is the starships data: ", starships)
				const swstarships = starships.data.results.map((name) => {
					return name
				})
				setStarships(swstarships)
			})
			.catch(err => console.log(err))
	}

	const getAllspecies = () => {
		getSpecies()
			.then((species) => {
				console.log("This is the species data: ", species)
				const swspecies = species.data.results.map((name) => {
					return name
				})
				setSpecies(swspecies)
			})
			.catch(err => console.log(err))
	}

	const getAllfilms = () => {
		getFilms()
			.then((films) => {
				console.log("This is the films data: ", films.data.results[0].title)
				const swfilms = films.data.results.map((title) => {
					return title
				})
				setFilms(swfilms)
			})
			.catch(err => console.log(err))
	}

	const getAllPlanets = () => {
		getPlanets()
			.then((planets) => {
				console.log("This is the planets data: ", planets)
				const swplanets = planets.data.results.map((name) => {
					return name
				})
				setPlanets(swplanets)
			})
			.catch(err => console.log(err))
	}

	const getAllPeople = () => {
		getPeople()
			.then((swdata) => {
				const swpeople = swdata.data.results.map((name) => {
					return name
				})
				setPeople(swpeople)
			})
			.catch(err => console.log(err))
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
					element={<Vehicles msgAlert={msgAlert} user={user} vehicles={vehicles}/>}
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
				<Route path='People/:id'
					element={<Details msgAlert={msgAlert} user={user} people={people} />}
				/>
				<Route path='Planets/:id'
					element={<Details msgAlert={msgAlert} user={user} planets={planets} />}
				/>
				<Route path='Vehicles/:id'
					element={<Details msgAlert={msgAlert} user={user} vehicles={vehicles} />}
				/>
				<Route path='Films/:id'
					element={<Details msgAlert={msgAlert} user={user} films={films} />}
				/>
				<Route path='Species/:id'
					element={<Details msgAlert={msgAlert} user={user} species={species} />}
				/>
				<Route path='Starships/:id'
					element={<Details msgAlert={msgAlert} user={user} starships={starships} />}
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
