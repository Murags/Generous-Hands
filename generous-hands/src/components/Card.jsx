import React from 'react';

const Card = ({ id, imgSrc, title, description}) => {
  return (
    <div className="card">
      <div className="org-img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="org-title">{title}</div>
      <div className="org-description">{description}</div>
      <a href={`/organization/${id}`} className="card-btn">Read More</a>
    </div>
  );
};

export default Card;
