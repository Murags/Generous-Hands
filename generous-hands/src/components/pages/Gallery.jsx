import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

const Gallery = () =>{
    return(
        <div>
            <Navbar/>
            <Hero isHomePage={false} heroText="Gallery"/>

            <Footer/>
        </div>
    );
}

export default Gallery;
