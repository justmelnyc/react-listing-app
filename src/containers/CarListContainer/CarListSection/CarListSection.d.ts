import { ICar, IDRopDownObject } from '../../../types/cars';
export interface IListProps extends ITopSectionProps {
  loading: boolean;
  error: number | null;
  cars: ICar[];
  changePageNo: (nextPageNo: number) => void;
}

export interface ITopSectionProps {
  page: number;
  totalPageCount: number;
  sort: string;
  sortList: IDRopDownObject[];
  handleDropDownChange: (dropDownName: string, value: string) => void;
}
