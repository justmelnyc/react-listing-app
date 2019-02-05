export interface IListProps extends ITopSectionProps {
  loading: boolean;
  error: number | null;
  cars: any;
  changePageNo: (nextPageNo: number) => void;
}

export interface ITopSectionProps {
  page: number;
  totalPageCount: number;
  sort: string;
  sortList: any;
  handleDropDownChange: (dropDownName: string, value: string) => void;
}
