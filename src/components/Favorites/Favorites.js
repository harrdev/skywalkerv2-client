import FavePeople from './FavePeople'
import FavePlanets from './FavePlanets'
import FaveVehicles from './FaveVehicles'
import FaveSpecies from './FaveSpecies'
import FaveStarships from './FaveStarships'
import FaveFilms from './FaveFilms'

const Favorites = (props) => {
    const { user } = props
    return (
        <div className="container">
            <div className="item">
                <FavePeople user={user}/>
            </div>
            <div className="item">
                <FavePlanets user={user}/>
            </div>
            <div className="item">
                <FaveSpecies user={user} />
            </div>
            <div className="item">
                <FaveVehicles user={user} />
            </div>
            <div className="item">
                <FaveStarships user={user} />
            </div>
            <div className="item">
                <FaveFilms user={user} />
            </div>
        </div>
    )
}

export default Favorites