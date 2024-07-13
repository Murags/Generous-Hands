import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Card  from "../Card";
import organizationData from "../../organizationData";
const Discover = () =>{
    return(
        <div>
            <Navbar/>
            <Hero isHomePage={false} heroText="Discover"/>
            
            <section class="discover">
        <div class="discover-cards">
        {organizationData.map(org => (
                    <Card
                    key={org.id}
                    imgSrc={org.imgSrc}
                    title={org.title}
                    description={org.description}
                    link={org.link}
                    />
                ))}
          
        </div>
      </section>
    <Footer />


        </div>
    );
}

export default Discover;
