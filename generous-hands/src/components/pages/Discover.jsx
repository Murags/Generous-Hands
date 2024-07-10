import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Card  from "../Card";
const Discover = () =>{
    return(
        <div>
            <Navbar/>
            <Hero isHomePage={false} heroText="Discover"/>
            
            <section class="discover">
        <div class="discover-cards">
          
          <div class="card">
            <div class="org-img1 org-img"></div>
            <div class="org-title">Ngong Childrens Home</div>
            <div class="org-description">
              This is ngong childrens home. This is where the orphan children
              are given a place to stay and live with freedom
            </div>
            <a href="./Organization_page.html" class="card-btn">Donate</a>
          </div>
          <div class="card">
            <div class="org-img-2 org-img"></div>
            <div class="org-title">Vivegonot Village</div>
            <div class="org-description">
              This are children that are living in poverty in remote villages
            </div>
            <a href="./Organization_page.html" class="card-btn">Donate</a>
          </div>
          <div class="card">
            <div class="org-img-3 org-img"></div>
            <div class="org-title">Cheptok Primary School</div>
            <div class="org-description">
              This is a remote school in a village in kenya. We pledge you to
              donate cloths and books to the needy children
            </div>
            <a href="./Organization_page.html" class="card-btn">Donate</a>
          </div>
          <div class="card">
            <div class="org-img-4 org-img"></div>
            <div class="org-title">Sahaga Old Age Home</div>
            <div class="org-description">
              Home For the eldery citizens of the country. Lets be responsible
              and take part in serving our pillars of the society
            </div>
            <a href="./Organization_page.html" class="card-btn">Donate</a>
          </div>
          <div class="card">
            <div class="org-img-5 org-img"></div>
            <div class="org-title">Turkana Food Drive NGO</div>
            <div class="org-description">
              Millions lack clean water daily. Your donation can bring
              life-saving water to the neediest communities
            </div>
            <a href="./Organization_page.html" class="card-btn">Donate</a>
          </div>
          <div class="card">
            <div class="org-img-6 org-img"></div>
            <div class="org-title">Children's Hunger Fund</div>
            <div class="org-description">
              Your generosity makes a difference. Millions, especially children
              and families, face the pain of hunger every night.
            </div>
            <a href="./Organization_page.html" class="card-btn">Donate</a>
          </div>
        </div>
      </section>
    <Footer />


        </div>
    );
}

export default Discover;
