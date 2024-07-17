import Navbar from "../Navbar"
import Hero from "../Hero";
import Footer from "../Footer";
import organizationData from "../../organizationData";
import Card from "../Card";


const Home = () =>{
    // Get the first three organizations
    const firstThreeOrganizations = organizationData.slice(0, 3);

    return(
        <div>
            <Navbar/>
            <Hero isHomePage={true} heroText="Become the Change" />
            <section className="discover">
                <div className="discover-content">
                <h3>Transform Your Life With Generousity and Kindness</h3>
                <p>
                    <strong> Join With Generous Hands To Impact A Needys Future</strong>
                    <br />
                    Every day, many struggle to meet basic needs. Your support provides
                    food, shelter, education, and hope. Even a small donation creates a
                    ripple effect, lifting families out of poverty and empowering
                    communities. Together, we can build a brighter future. Donate today
                    and be someone's hero
                </p>
                </div>
                <div className="discover-cards">
                {firstThreeOrganizations.map(org => (
                    <Card
                    key={org.id}
                    id={org.id}
                    imgSrc={org.imgSrc}
                    title={org.title}
                    description={org.description}
                    />
                ))}
                </div>
                <a href="/Discover" className="discover-btn">Discover</a>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;
