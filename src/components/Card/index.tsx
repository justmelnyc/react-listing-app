import React from 'react';
import { Link } from 'react-router-dom';
import { ICar } from '../../types/cars';
import './Card.scss';

const Card: React.FunctionComponent<{ data: ICar }> = React.memo(props => {
  const { pictureUrl, manufacturerName, modelName, stockNumber, mileage, fuelType, color } = props.data;
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={pictureUrl} alt="pl" className="card-image" />
      </div>
      <div className="card-details">
        <div className="name" data-testid="car_name">{`${manufacturerName}  ${modelName}`}</div>
        <div className="details">{`Stock # ${stockNumber} - ${mileage.number} ${
          mileage.unit
        } - ${fuelType} - ${color}`}</div>
        <Link to={`/car-details/${stockNumber}`}>
          <div className="link">View details</div>
        </Link>
      </div>
    </div>
  );
});

export default Card;
