import { ActionTypes } from '../constants/actionTypesConstants';

const initialState = {
  data: null,
  error: null,
  loading: false,
};
interface IAction {
  type: string;
  data?: any;
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
