import React from 'react';
import './LoaderCard.scss';

const LoaderCard: React.FunctionComponent = React.memo(() => {
  return (
    <div className="loading-card">
      <div className="card-image-container loading">
        <div className="card-image" />
      </div>
      <div className="card-details">
        <div className="name loading" />
        <div className="details loading" />
        <div className="link loading" />
      </div>
    </div>
  );
});

export default LoaderCard;
