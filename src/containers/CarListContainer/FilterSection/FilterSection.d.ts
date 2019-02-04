export interface IFilterProps {
  staticDataLoading: boolean;
  staticDataError: number | null;
  color: string;
  colors: any;
  manufacturer: string;
  manufacturers: any;
  applyFilter: () => void;
  handleDropDownChange: (dropDownName: string, value: string) => void;
}
