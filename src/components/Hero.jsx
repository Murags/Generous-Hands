import React from 'react';

const Hero = ({ isHomePage, heroText }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className={`hero-text ${isHomePage ? '' : 'bottom'}`}>{heroText}</h1>
        {isHomePage && (
          <>
            <h2 className="hero-text2">
              You want to see in the world with Manus liberalis
            </h2>
            <a href="/Discover" className="hero-btn">Donate Now</a>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
