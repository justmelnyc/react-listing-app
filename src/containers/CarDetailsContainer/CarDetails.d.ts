import { ICar } from '../../types/cars';
export interface ICarDetailsProps {
  stockNumber: number;
  error: number | null;
  loading: boolean;
  match: IMatch;
  carDetails: ICar;
  getCarDetails: (stockNumber: number) => void;
}
export interface ICarDetailsState {
  favourite: boolean;
}

interface IMatch {
  params: IParams;
}

interface IParams {
  stockNumber: number;
}
