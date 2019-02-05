import { ICar, IColors, IDRopDownObject, IManufacturers } from '../../types/cars';
export interface ICarListProps {
  getCarList: (manufacturer: string, color: string, page: number, sort: string) => void;
  staticDataError: number | null;
  staticDataLoading: boolean;
  error: number | null;
  loading: boolean;
  manufacturers: IDRopDownObject[];
  colors: IDRopDownObject[];
  getStaticData: () => void;
  dispatch: any;
  cars: ICar[];
  sortList: IDRopDownObject[];
  totalPageCount: number;
}
export interface ICarListState {
  manufacturer: string;
  color: string;
  page: number;
  sort: string;
}
