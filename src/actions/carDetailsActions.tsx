import axios from 'axios';
import { ActionTypes } from '../constants/actionTypesConstants';
import { APIConstants } from '../constants/apiConstants';

const getCarDetailsNotify = () => {
  return {
    type: ActionTypes.GET_CAR_DETAILS_NOTIFY,
  };
};

const getCarDetailsSuccess = (data: any) => {
  return {
    data,
    type: ActionTypes.GET_CAR_DETAILS_SUCCESS,
  };
};

const getCarDetailsError = (error: number) => {
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
