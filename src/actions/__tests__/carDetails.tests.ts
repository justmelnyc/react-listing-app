import { ActionTypes } from '../../constants/actionTypesConstants';
import { carDetails } from '../../constants/testMockConstants';
import * as actions from '../carDetailsActions';

describe('Car Details Actions', () => {
  it('should create an action to notify car details API triggered', () => {
    const expectedAction = {
      type: ActionTypes.GET_CAR_DETAILS_NOTIFY,
    };
    expect(actions.getCarDetailsNotify()).toEqual(expectedAction);
  });
  it('should create an action to send cars details response', () => {
    const expectedAction = {
      data: carDetails,
      type: ActionTypes.GET_CAR_DETAILS_SUCCESS,
    };
    expect(actions.getCarDetailsSuccess(carDetails)).toEqual(expectedAction);
  });
  it('should create an action to send error code of car details API', () => {
    const error = 404;
    const expectedAction = {
      error,
      type: ActionTypes.GET_CAR_DETAILS_ERROR,
    };
    expect(actions.getCarDetailsError(error)).toEqual(expectedAction);
  });
});
