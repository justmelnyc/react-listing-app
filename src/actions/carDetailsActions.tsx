import axios from 'axios';
import { ActionTypes } from '../constants/actionTypesConstants';
import { APIConstants } from '../constants/apiConstants';
import { ICar } from '../types/cars';

export const getCarDetailsNotify = () => {
  return {
    type: ActionTypes.GET_CAR_DETAILS_NOTIFY,
  };
};

export const getCarDetailsSuccess = (data: ICar) => {
  return {
    data,
    type: ActionTypes.GET_CAR_DETAILS_SUCCESS,
  };
};

export const getCarDetailsError = (error: number) => {
  return {
    error,
    type: ActionTypes.GET_CAR_DETAILS_ERROR,
  };
};

export const getCarDetailsAction = (stockNumber: number) => {
  return (dispatch: any) => {
    dispatch(getCarDetailsNotify());
    axios
      .get(`${APIConstants.baseURL}${APIConstants.cars}/${stockNumber}`)
      .then(res => {
        dispatch(getCarDetailsSuccess(res.data));
      })
      .catch(error => {
        dispatch(getCarDetailsError(error.response.status));
      });
  };
};
