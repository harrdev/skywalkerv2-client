import { Link } from 'react-router-dom'

const Dashboard = (props) => {

    return (
        <div>
            <h1 className="skywalkerH1">Skywalker Academy</h1>
            <h3 className="skywalkerH3">Select a category to explore</h3>
            <div className="containerMain">
                <div className="itemMain1">
                    <h3><Link to="./People" className="mainLink">People</Link></h3>
                </div>
                <div className="itemMain2">
                    <h3><Link to="./Planets" className="mainLink">Planets</Link></h3>
                </div>
                <div className="itemMain3">
                    <h3><Link to="./Vehicles" className="mainLink">Vehicles</Link></h3>
                </div>
                <div className="itemMain4">
                    <h3><Link to="./Species" className="mainLink">Species</Link></h3>
                </div>
                <div className="itemMain5">
                    <h3><Link to="./Starships" className="mainLink">Starships</Link></h3>
                </div>
                <div className="itemMain6">
                    <h3><Link to="./Films" className="mainLink">Films</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Dashboard