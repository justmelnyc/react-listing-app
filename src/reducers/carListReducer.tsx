import { ActionTypes } from '../constants/actionTypesConstants';

const initialState = {
  data: null,
  error: null,
  loading: false,
  staticData: null,
  staticDataError: null,
  staticDataLoading: false,
};
interface IAction {
  type: string;
  data?: any;
  error?: number;
  staticData?: any;
}

export const carListReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.GET_CARS_LIST_NOTIFY:
      return Object.assign({}, state, { data: null, error: null, loading: true });
    case ActionTypes.GET_CARS_LIST_SUCCESS:
      return Object.assign({}, state, { data: action.data, error: null, loading: false });
    case ActionTypes.GET_CARS_LIST_ERROR:
      return Object.assign({}, state, { error: action.error, data: null, loading: false });

    case ActionTypes.GET_STATIC_DATA_NOTIFY:
      return Object.assign({}, state, { staticData: null, staticDataError: null, staticDataLoading: true });
    case ActionTypes.GET_STATIC_DATA_SUCCESS:
      return Object.assign({}, state, {
        staticData: action.staticData,
        staticDataError: null,
        staticDataLoading: false,
      });
    case ActionTypes.GET_STATIC_DATA_ERROR:
      return Object.assign({}, state, { staticDataError: action.error, staticData: null, staticDataLoading: false });

    default:
      return state;
  }
};
