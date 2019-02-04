export interface IPaginatorProps {
  currentPage: number;
  changePageNo: (nextPageNo: number) => void;
  totalPages: number;
}
