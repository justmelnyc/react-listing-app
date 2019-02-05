import { ActionTypes } from '../constants/actionTypesConstants';
import { APIConstants } from '../constants/apiConstants';
import { ICarList, IManufacturer, IStaticData } from '../types/cars';

interface IgetCarListNotify {
  type: typeof ActionTypes.GET_CARS_LIST_NOTIFY;
}

interface IgetCarListSuccess {
  type: typeof ActionTypes.GET_CARS_LIST_SUCCESS;
  data: ICarList;
}

export type CarListActionTypes = IgetCarListNotify | IgetCarListSuccess;
