import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

const Gallery = () =>{
    return(
        <div>
            <Navbar/>
            <Hero isHomePage={false} heroText="Gallery"/>
            <main>
      <section class="card-images">
        <div class="gallery-card">
          <div class="content">
            <img src="./Images/help5.jpg" alt="This child needs your help" />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img
              src="./Images/african-children-standing-head-head.jpg"
              alt="This child needs your help"
            />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img src="./Images/need2.jpg" alt="This child needs your help" />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img src="./Images/need3.jpg" alt="This child needs your help" />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img
              src="./Images/cry for help.jpg"
              alt="This child needs your help"
            />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img
              src="./Images/gallery_1.jpg"
              alt="This child needs your help"
            />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img
              src="./Images/gallery_2.jpg"
              alt="This child needs your help"
            />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img
              src="./Images/Helping Kids.jpg"
              alt="This child needs your help"
            />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img
              src="./Images/OldageHomes.jpg"
              alt="This child needs your help"
            />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img src="./Images/Help1.jpg" alt="This child needs your help" />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img src="./Images/Help2.jpg" alt="This child needs your help" />
          </div>
        </div>
        <div class="gallery-card">
          <div class="content">
            <img src="./Images/Help3.jpg" alt="This child needs your help" />
          </div>
        </div>
      </section>
    </main>
    <section class="beforefooter">
      <div class="overlay"></div>
      <div class="insidefooter">
        <div class="volunteer-container">
          <img src="./Images/group-happy-diverse-volunteers.jpg" alt="Volunteer" />
        </div>
        <div class="volunteer-form">
          <h1>Be a Volunteer</h1>
          <input
            type="text"
            class="textbox"
            id="name"
            placeholder="Your Name"
          />
          <input
            type="text"
            class="textbox"
            id="email"
            placeholder="Your Email"
          />
          <input
            type="text"
            class="textbox"
            id="message"
            placeholder="Your Message"
          />
          <a class="volunteer-btn" href="">Send</a>
        </div>
      </div>
    </section>
            <Footer/>
        </div>
    );
}

export default Gallery;
