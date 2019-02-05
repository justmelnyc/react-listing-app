import { IDRopDownObject } from '../../../types/cars';
export interface IFilterProps {
  staticDataLoading: boolean;
  staticDataError: number | null;
  color: string;
  colors: IDRopDownObject[];
  manufacturer: string;
  manufacturers: IDRopDownObject[];
  applyFilter: () => void;
  handleDropDownChange: (dropDownName: string, value: string) => void;
}
