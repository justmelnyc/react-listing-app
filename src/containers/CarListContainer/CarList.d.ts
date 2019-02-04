export interface ICarListProps {
  getCarList: (manufacturer: string, color: string, page: number, sort: string) => void;
  staticDataError: number | null;
  staticDataLoading: boolean;
  error: number | null;
  loading: boolean;
  manufacturers: any;
  colors: any;
  getStaticData: () => void;
  dispatch: any;
  cars: any;
  sortList: any;
  totalPageCount: number;
}

export interface ICarListState {
  manufacturer: string;
  color: string;
  page: number;
  sort: string;
}
