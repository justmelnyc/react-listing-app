import React from 'react';
import { TextConstants } from '../../../constants/textConstants';
import { ICarSpecsProps } from './CarSpecifications';

const CarSpecifications: React.FunctionComponent<ICarSpecsProps> = React.memo((props: ICarSpecsProps) => {
  const { carDetails } = props;
  return (
    <div className="details-wrapper-left">
      <div className="title">{`${carDetails.manufacturerName} ${carDetails.modelName}`}</div>
      <div className="specification">{`Stock # ${carDetails.stockNumber} - ${carDetails.mileage.number}
        ${carDetails.mileage.unit} - ${carDetails.fuelType} - ${carDetails.color}`}</div>
      <div className="description">{TextConstants.carDetails}</div>
    </div>
  );
});

export default CarSpecifications;
