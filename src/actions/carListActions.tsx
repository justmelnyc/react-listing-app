import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../constants/actionTypesConstants';
import { APIConstants } from '../constants/apiConstants';
import { ICarList, IManufacturer, IStaticData } from '../types/cars';
export const getCarListNotify = () => {
  return {
    type: ActionTypes.GET_CARS_LIST_NOTIFY,
  };
};

export const getCarListSuccess = (data: ICarList) => {
  return {
    data,
    type: ActionTypes.GET_CARS_LIST_SUCCESS,
  };
};

export const getCarListError = (error: number) => {
  return {
    error,
    type: ActionTypes.GET_CARS_LIST_ERROR,
  };
};

export const getStaticDataNotify = () => {
  return {
    type: ActionTypes.GET_STATIC_DATA_NOTIFY,
  };
};

export const getStaticDataError = (error: number) => {
  return {
    error,
    type: ActionTypes.GET_STATIC_DATA_ERROR,
  };
};

export const getStaticDataSuccess = (staticData: IStaticData) => {
  return {
    staticData,
    type: ActionTypes.GET_STATIC_DATA_SUCCESS,
  };
};

export const getCarListAction = (color: string, manufacturer: string, page: number, sort: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getCarListNotify());
    const queryString = `?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`;
    axios
      .get(`${APIConstants.baseURL}${APIConstants.cars}${queryString}`)
      .then(res => {
        dispatch(getCarListSuccess(res.data));
      })
      .catch(error => {
        dispatch(getCarListError(error.response.status));
      });
  };
};

export const getStaticDataAction = () => {
  return async (dispatch: Dispatch) => {
    const staticData = { manufacturers: [], colors: [] };
    dispatch(getStaticDataNotify());
    try {
      const manufacturers = await axios.get(`${APIConstants.baseURL}${APIConstants.manufacturers}`);
      if (manufacturers.data) {
        staticData.manufacturers = manufacturers.data.manufacturers.map((manufacturer: IManufacturer) => {
          return {
            label: manufacturer.name,
            value: manufacturer.name,
          };
        });
      }
    } catch (error) {
      dispatch(getStaticDataError(error.response.status));
      return;
    }
    try {
      const colors = await axios.get(`${APIConstants.baseURL}${APIConstants.colors}`);
      if (colors.data) {
        staticData.colors = colors.data.colors.map((color: string[]) => {
          return {
            label: color,
            value: color,
          };
        });
      }
    } catch (error) {
      dispatch(getStaticDataError(error.response.status));
      return;
    }
    dispatch(getStaticDataSuccess(staticData));
  };
};
