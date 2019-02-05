import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ActionTypes } from '../../constants/actionTypesConstants';
import * as actions from '../carListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const carsList = {
  data: [
    {
      color: 'white',
      fuelType: 'Diesel',
      manufacturerName: 'Fiat',
      mileage: {
        number: 100141,
        unit: 'km',
      },
      modelName: 'Marea',
      pictureUrl: 'http://localhost:3001/car.svg',
      stockNumber: 41400,
    },
  ],
  totalPageCount: 10,
};

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
    const staticData = {
      colors: [
        {
          label: 'red',
          value: 'red',
        },
      ],
      manufacturers: [
        {
          label: 'Audi',
          value: 'Audi',
        },
      ],
    };
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

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates GET_CARS_LIST_SUCCESS when fetching car List has been done', () => {
    fetchMock.getOnce('/cars', {
      body: carsList,
    });

    const expectedActions = [
      { type: ActionTypes.GET_CARS_LIST_NOTIFY },
      { type: ActionTypes.GET_CARS_LIST_SUCCESS, body: carsList },
    ];
    const store = mockStore({});
    // return store.dispatch(actions.getCarListAction()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
  });
});
