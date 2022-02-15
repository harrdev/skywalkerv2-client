import FavePeople from './FavePeople'
import FavePlanets from './FavePlanets'
import FaveSpecies
 from './FaveSpecies'
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
        </div>
    )
}

export default Favorites