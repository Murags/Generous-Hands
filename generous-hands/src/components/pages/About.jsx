import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero isHomePage={false} heroText="About" />
      <section className="about">
        <div className="about-content">
          <div className="staff-img"></div>
          <section className="orginfo">
            <div>
              <strong>Generous Hands</strong>Where compassion meets action. At
              Generous Hands, we are dedicated to creating a platform that
              brings together individuals and organizations who are committed to
              making a difference in the world. Our mission is to connect people
              with charity events happening every day, allowing them to
              contribute to noble causes and be part of a community driven by
              kindness and generosity.
            </div>
            <div>
              <strong>Vision Statement</strong>
              To create a connected and compassionate community in Kenya where
              every individual is empowered to make a positive impact through
              active participation in NGO activities and charity events
            </div>
          </section>
          <section className="orginfo">
            <div>
              <strong>Mission Statement</strong>
              Our mission is to bridge the gap between NGOs and the community by
              providing a comprehensive and user-friendly platform that informs,
              inspires, and engages people in meaningful charitable activities.
              Through Generous Hands, we aim to increase awareness, foster
              collaboration, and encourage active involvement in initiatives
              that improve lives and uplift communities across Kenya.
            </div>
            <div>
              <strong> Why Choose Generous Hands</strong>
              At Generous Hands, we believe that everyone has the power to make
              a difference. Our platform is designed to make it easy for you to
              find and participate in charitable activities that align with your
              values and interests. By bringing together a diverse range of
              events and opportunities, we aim to foster a culture of giving and
              community spirit. Join us in our mission to create a better world,
              one charitable event at a time. Together, we can turn compassion
              into action and make a lasting impact on the lives of those in
              need. Thank you for being a part of Generous Hands. Let's make a
              difference, together.
            </div>
          </section>
          <div className="staff-img"></div>
        </div>
      </section>
      <section className="founders-section">
        <h2>Our Founders</h2>
        <p>
          Generous Hands was founded by a visionary team united by their passion
          for making a positive impact. With diverse backgrounds in social work,
          technology, and community development, they created this platform to
          empower people to support meaningful causes.Their dedication to
          fostering generosity and compassion drives our mission to build a
          better, kinder world.
        </p>
        <div className="founders">
          <div className="founder_pair">
            <div className="img-container">
              <img
                src="./Images/murags.jpg"
                alt="Dennis Murage CTO & c0-founder"
              />
            </div>
            <div className="founder_text">
              <span className="founder-name">Dennis Murage</span> Visionary CEO and
              Co-Founder of Generous Hands. Pioneering change and leading with
              passion.
            </div>
          </div>
          <div className="founder_pair">
            <div className="img-container">
              <img src="./Images/bhavin.jpg" alt="Bhavin co-founder" />
            </div>
            <div className="founder_text">
              <span className="founder-name">Bhavin Mepani</span> Dynamic CEO and
              Co-founder of Generous Hands. Mastermind behind seamless
              operations, ensuring every aspect runs smoothly.
            </div>
          </div>
          <div className="founder_pair">
            <div className="img-container">
              <img src="./Images/austin.jpg" alt="Austin CTO " />
            </div>
            <div className="founder_text">
              <span className="founder-name">Austin Kimathi</span> Innovative CTO of
              Generous Hands. The tech genius driving cutting-edge solutions and
              technological advancements.
            </div>
          </div>
          <div className="founder_pair">
            <div className="img-container">
              <img src="./Images/dhruvin.jpg" alt="Dhruvin CFO" />
            </div>
            <div className="founder_text">
              <span className="founder-name">Dhruvin Bhudia</span> Strategic CFO of
              Generous Hands. Financial wizard, ensuring the company's fiscal
              strength and growth.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
