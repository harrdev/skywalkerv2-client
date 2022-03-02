import { useNavigate } from "react-router-dom"

const Home = (props) => {
	const navigate = useNavigate();

	return (
		<div className="home">
			{navigate("/sign-in")}
		</div>
	)
}

export default Home
