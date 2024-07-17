import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <Hero isHomePage={false} heroText="Gallery" />
      <main>
        <section className="card-images">
          <div className="gallery-card">
            <div className="content">
              <img src="./Images/help5.jpg" alt="This child needs your help" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img
                src="./Images/african-children-standing-head-head.jpg"
                alt="This child needs your help"
              />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img src="./Images/need2.jpg" alt="This child needs your help" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img src="./Images/need3.jpg" alt="This child needs your help" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img
                src="./Images/cry for help.jpg"
                alt="This child needs your help"
              />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img
                src="./Images/gallery_1.jpg"
                alt="This child needs your help"
              />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img
                src="./Images/gallery_2.jpg"
                alt="This child needs your help"
              />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img
                src="./Images/Helping Kids.jpg"
                alt="This child needs your help"
              />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img
                src="./Images/OldageHomes.jpg"
                alt="This child needs your help"
              />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img src="./Images/Help1.jpg" alt="This child needs your help" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img src="./Images/Help2.jpg" alt="This child needs your help" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="content">
              <img src="./Images/Help3.jpg" alt="This child needs your help" />
            </div>
          </div>
        </section>
      </main>
      <section className="beforefooter">
        <div className="overlay"></div>
        <div className="insidefooter">
          <div className="volunteer-container">
            <img
              src="./Images/group-happy-diverse-volunteers.jpg"
              alt="Volunteer"
            />
          </div>
          <div className="volunteer-form">
            <h1>Be a Volunteer</h1>
            <input
              type="text"
              className="textbox"
              id="name"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="textbox"
              id="email"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="textbox"
              id="message"
              placeholder="Your Message"
            />
            <a className="volunteer-btn" href="">
              Send
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
