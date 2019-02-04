export interface ICarSpecsProps {
  carDetails: ICarDetails;
}

interface ICarDetails {
  manufacturerName: string;
  modelName: string;
  stockNumber: number;
  mileage: IMileage;
  fuelType: string;
  color: string;
}

interface IMileage {
  number: number;
  unit: string;
}
