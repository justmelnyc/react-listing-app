export interface ICarDetailsProps {
  stockNumber: number;
  error: number | null;
  loading: boolean;
  match: any;
  carDetails: any;
  getCarDetails: (stockNumber: number) => void;
}
export interface ICarDetailsState {
  favourite: boolean;
}
