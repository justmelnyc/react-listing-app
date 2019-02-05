import { ActionTypes } from '../constants/actionTypesConstants';
import { ICar } from '../types/cars';
export const initialState = {
  data: null,
  error: null,
  loading: false,
};
interface IAction {
  type: string | null;
  data?: ICar | null;
  error?: number;
}

export const carDetailsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.GET_CAR_DETAILS_NOTIFY:
      return Object.assign({}, state, { data: null, error: null, loading: true });
    case ActionTypes.GET_CAR_DETAILS_SUCCESS:
      return Object.assign({}, state, { data: action.data, error: null, loading: false });
    case ActionTypes.GET_CAR_DETAILS_ERROR:
      return Object.assign({}, state, { error: action.error, data: null, loading: false });
    default:
      return state;
  }
};
