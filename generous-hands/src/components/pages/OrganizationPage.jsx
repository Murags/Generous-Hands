import React from "react";
import { useParams } from "react-router-dom";
import organizationData from "../../organizationData";
import NavBar from "../Navbar";
import Hero from "../Hero";

const OrganizationPage = () => {
  const { id } = useParams();
  const organization = organizationData.find((org) => org.id.toString() === id);

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="organization-page">
      <NavBar />
      <Hero isHomePage={false} heroText={organization.title} />
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                <div className="overview-box__detail">
                  <span className="overview-box__label">Date it started</span>
                  <span className="overview-box__text">
                    {organization.dateStarted}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <span className="overview-box__label">Location</span>
                  <span className="overview-box__text">
                    {organization.location}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <span className="overview-box__label">Paybill</span>
                  <span className="overview-box__text">
                    {organization.paybill}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <span className="overview-box__label">Priority Donation</span>
                  <span className="overview-box__text">
                    {organization.priorityDonation}
                  </span>
                </div>
              </div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">The founders</h2>
                {organization.founders.map((founder, index) => (
                  <div key={index} className="overview-box__detail">
                    <img
                      src={founder.imgSrc}
                      alt={founder.name}
                      className="overview-box__img"
                    />
                    <span className="overview-box__label">Founder</span>
                    <span className="overview-box__text">{founder.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">About the Organization</h2>
          <p className="description__text">{organization.description}</p>
        </div>
      </section>
      <section className="section-pictures">
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--1"
            src="/Images/Help2.jpg"
            alt=""
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--2"
            src="/Images/gallery_1.jpg"
            alt=""
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--3"
            src="/Images/gallery_2.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="section-reviews">
        <section>
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src="/Images/logo-bg.png" alt="logo" className="" />
            </div>
            <img
              src="/Images/logo-bg.png"
              alt=""
              className="cta__img cta__img--1"
            />
            <img
              src="/Images/logo-bg.png"
              alt=""
              className="cta__img cta__img--2"
            />

            <div className="cta__content">
              <h2 className="heading-secondary">Lorem ipsum dolor sit.</h2>
              <p className="cta__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href={`/organization/${id}/donate`}
                className="btn btn--orange"
              >
                Donate
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default OrganizationPage;
