import Navbar from "../Navbar";
import Hero from "../Hero";

const About = () =>{
    return(
        <div>
            <Navbar/>
            <Hero isHomePage={false} heroText="About"/>
        </div>
    );
}

export default About;
