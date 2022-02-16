import { Link } from 'react-router-dom'

const Dashboard = (props) => {

    return (
        <div>
            <h1 className="skywalkerH1">Skywalker Academy</h1>
            <h3 className="skywalkerH3">Select a category to explore</h3>
            <div className="containerMain">
                <div className="itemMain1">
                    <Link to="./People" className="mainLink">People</Link>
                </div>
                <div className="itemMain2">
                    <Link to="./Planets" className="mainLink">Planets</Link>
                </div>
                <div className="itemMain3">
                    <Link to="./Vehicles" className="mainLink">Vehicles</Link>
                </div>
                <div className="itemMain4">
                    <Link to="./Species" className="mainLink">Species</Link>
                </div>
                <div className="itemMain5">
                    <Link to="./Starships" className="mainLink">Starships</Link>
                </div>
                <div className="itemMain6">
                    <Link to="./Films" className="mainLink">Films</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard