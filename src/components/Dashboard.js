import { Link } from 'react-router-dom'

const Dashboard = (props) => {

    return (
        <div>
            <h1 className="skywalkerH1">Skywalker Academy</h1>
            <h3 className="skywalkerH3">Select a category to explore</h3>
            <div className="containerMain">
                <div className="itemMain1">
                    <Link to="./People" className="mainLink" onClick={props.removeForm}>People</Link>
                </div>
                <div className="itemMain2">
                    <Link to="./Planets" className="mainLink" onClick={props.removeForm}>Planets</Link>
                </div>
                <div className="itemMain3">
                    <Link to="./Vehicles" className="mainLink" onClick={props.removeForm}>Vehicles</Link>
                </div>
                <div className="itemMain4">
                    <Link to="./Species" className="mainLink" onClick={props.removeForm}>Species</Link>
                </div>
                <div className="itemMain5">
                    <Link to="./Starships" className="mainLink" onClick={props.removeForm}>Starships</Link>
                </div>
                <div className="itemMain6">
                    <Link to="./Films" className="mainLink" onClick={props.removeForm}>Films</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard