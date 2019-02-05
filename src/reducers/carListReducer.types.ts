import { ICarList, IStaticData } from '../types/cars';

export interface ICarListState {
  data: null | ICarList;
  error: null | number;
  loading: boolean;
  staticData: null | IStaticData;
  staticDataError: null | number;
  staticDataLoading: boolean;
}
export interface ICarListAction {
  type: string;
  data?: ICarList;
  error?: number;
  staticData?: IStaticData;
}
