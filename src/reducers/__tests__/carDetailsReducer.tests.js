import { ActionTypes } from '../../constants/actionTypesConstants';
import { carDetails } from '../../constants/testMockConstants';
import { carDetailsReducer, initialState } from '../carDetailsReducer';

describe('carDetailsReducer reducer', () => {
  it('should return the initial state', () => {
    expect(carDetailsReducer(undefined, { type: null })).toEqual(initialState);
  });

  it('should handle GET_CAR_DETAILS_SUCCESS', () => {
    expect(
      carDetailsReducer(initialState, {
        data: carDetails,
        type: ActionTypes.GET_CAR_DETAILS_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      data: carDetails,
    });
  });

  it('should handle GET_CAR_DETAILS_NOTIFY', () => {
    expect(
      carDetailsReducer(initialState, {
        type: ActionTypes.GET_CAR_DETAILS_NOTIFY,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle GET_CAR_DETAILS_ERROR', () => {
    expect(
      carDetailsReducer(initialState, {
        error: 404,
        type: ActionTypes.GET_CAR_DETAILS_ERROR,
      }),
    ).toEqual({
      ...initialState,
      error: 404,
    });
  });
});
