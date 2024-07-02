import Navbar from "../Navbar";
import Hero from "../Hero";

const Discover = () =>{
    return(
        <div>
            <Navbar/>
            <Hero isHomePage={false} heroText="Discover"/>
        </div>
    );
}

export default Discover;
