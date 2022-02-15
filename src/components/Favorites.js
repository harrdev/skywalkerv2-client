import FavePeople from './FavePeople'
import FavePlanets from './FavePlanets'
import FaveVehicles from './FaveVehicles'
import FaveSpecies from './FaveSpecies'
import FaveStarships from './FaveStarships'
import FaveFilms from './FaveFilms'

const Favorites = (props) => {
    const { user } = props
    return (
        <div className="saved">
            <div>
                <FavePeople user={user}/>
            </div>
            <div>
                <FavePlanets user={user}/>
            </div>
            <div>
                <FaveSpecies user={user} />
            </div>
            <div>
                <FaveVehicles user={user} />
            </div>
            <div>
                <FaveStarships user={user} />
            </div>
            <div>
                <FaveFilms user={user} />
            </div>
        </div>
    )
}

export default Favorites