export interface IDropDownProps {
  label: string;
  dropDownName: string;
  selectedValue: string;
  list: IDropDownList[];
  onChange: (dropDownName: string, value: string) => void;
}

interface IDropDownList {
  label: string;
  value: string;
}
export interface IDropDownState {
  displayMenu: boolean;
}
