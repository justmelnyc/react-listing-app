export interface IListProps {
  loading: boolean;
  error: number | null;
  page: number;
  totalPageCount: number;
  sort: string;
  sortList: any;
  handleDropDownChange: (dropDownName: string, value: string) => void;
  cars: any;
  changePageNo: (nextPageNo: number) => void;
}
