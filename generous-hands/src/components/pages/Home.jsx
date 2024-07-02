import { Link } from "react-router-dom";


const Home = () =>{
    return(
        <div>
            This is the home page
            <Link to="/discover">Discover</Link>
        </div>
    );
}

export default Home;
