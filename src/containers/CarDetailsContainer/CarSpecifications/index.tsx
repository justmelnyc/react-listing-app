import React from 'react';
import { ICarSpecsProps } from './CarSpecifications';
const CarSpecifications: React.FunctionComponent<ICarSpecsProps> = (props: ICarSpecsProps) => {
  const { carDetails } = props;
  return (
    <div className="details-wrapper-left">
      <div className="title">{`${carDetails.manufacturerName} ${carDetails.modelName}`}</div>
      <div className="specification">{`Stock # ${carDetails.stockNumber} - ${carDetails.mileage.number}
        ${carDetails.mileage.unit} - ${carDetails.fuelType} - ${carDetails.color}`}</div>
      <div className="description">
        This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery
        times shown in this page are not definitive and may change due to bad weather conditions.
      </div>
    </div>
  );
};

export default CarSpecifications;
