export interface ICar {
  color: string;
  fuelType: string;
  manufacturerName: string;
  mileage: {
    number: number;
    unit: string;
  };
  modelName: string;
  pictureUrl: string;
  stockNumber: number;
}

export interface IManufacturers {
  manufacturers: IManufacturer[];
}
export interface IColors {
  colors: string[];
}
export interface IManufacturer {
  name: string;
  models: IModel[];
}
interface IModel {
  name: string;
}
export interface ICarList {
  data: ICar[];
}

export interface IStaticData {
  manufacturers: IDropDownObject[];
  colors: IDropDownObject[];
}

export interface IDRopDownObject {
  label: string;
  value: string;
}
