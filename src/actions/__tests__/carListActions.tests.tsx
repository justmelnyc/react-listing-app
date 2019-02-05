import { ActionTypes } from '../../constants/actionTypesConstants';
import { carsList, staticData } from '../../constants/testMockConstants';
import * as actions from '../carListActions';

describe('Car List Actions', () => {
  it('should create an action to notify car list API triggered', () => {
    const expectedAction = {
      type: ActionTypes.GET_CARS_LIST_NOTIFY,
    };
    expect(actions.getCarListNotify()).toEqual(expectedAction);
  });
  it('should create an action to send list of cars response', () => {
    const expectedAction = {
      data: carsList,
      type: ActionTypes.GET_CARS_LIST_SUCCESS,
    };
    expect(actions.getCarListSuccess(carsList)).toEqual(expectedAction);
  });
  it('should create an action to send error code of car list API', () => {
    const error = 404;
    const expectedAction = {
      error,
      type: ActionTypes.GET_CARS_LIST_ERROR,
    };
    expect(actions.getCarListError(error)).toEqual(expectedAction);
  });
});

describe('Static Data Actions', () => {
  it('should create an action to notify static Data APIs triggered', () => {
    const expectedAction = {
      type: ActionTypes.GET_STATIC_DATA_NOTIFY,
    };
    expect(actions.getStaticDataNotify()).toEqual(expectedAction);
  });
  it('should create an action to send static Data response', () => {
    const expectedAction = {
      staticData,
      type: ActionTypes.GET_STATIC_DATA_SUCCESS,
    };
    expect(actions.getStaticDataSuccess(staticData)).toEqual(expectedAction);
  });
  it('should create an action to send error code of Static Data API', () => {
    const error = 404;
    const expectedAction = {
      error,
      type: ActionTypes.GET_STATIC_DATA_ERROR,
    };
    expect(actions.getStaticDataError(error)).toEqual(expectedAction);
  });
});
