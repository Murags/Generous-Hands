import React from 'react';

const Card = ({ imgSrc, title, description, link }) => {
  return (
    <div className="card">
      <div className="org-img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="org-title">{title}</div>
      <div className="org-description">{description}</div>
      <a href={link} className="card-btn">Read More</a>
    </div>
  );
};

export default Card;
