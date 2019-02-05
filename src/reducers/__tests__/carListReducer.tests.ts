import { ActionTypes } from '../../constants/actionTypesConstants';
import { carsList, staticData } from '../../constants/testMockConstants';
import { carListReducer, initialState } from '../carListReducer';

describe('carListReducer reducer Car List', () => {
  it('should return the initial state', () => {
    expect(carListReducer(undefined, { type: null })).toEqual(initialState);
  });

  it('should handle GET_CARS_LIST_SUCCESS', () => {
    expect(
      carListReducer(initialState, {
        data: carsList,
        type: ActionTypes.GET_CARS_LIST_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      data: carsList,
    });
  });

  it('should handle GET_CARS_LIST_NOTIFY', () => {
    expect(
      carListReducer(initialState, {
        type: ActionTypes.GET_CARS_LIST_NOTIFY,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle GET_CARS_LIST_ERROR', () => {
    expect(
      carListReducer(initialState, {
        error: 404,
        type: ActionTypes.GET_CARS_LIST_ERROR,
      }),
    ).toEqual({
      ...initialState,
      error: 404,
    });
  });
});

describe('carListReducer reducer Static Data', () => {
  it('should handle GET_STATIC_DATA_SUCCESS', () => {
    expect(
      carListReducer(initialState, {
        staticData,
        type: ActionTypes.GET_STATIC_DATA_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      staticData,
    });
  });

  it('should handle GET_STATIC_DATA_NOTIFY', () => {
    expect(
      carListReducer(initialState, {
        type: ActionTypes.GET_STATIC_DATA_NOTIFY,
      }),
    ).toEqual({
      ...initialState,
      staticDataLoading: true,
    });
  });

  it('should handle GET_STATIC_DATA_ERROR', () => {
    expect(
      carListReducer(initialState, {
        error: 404,
        type: ActionTypes.GET_STATIC_DATA_ERROR,
      }),
    ).toEqual({
      ...initialState,
      staticDataError: 404,
    });
  });
});
