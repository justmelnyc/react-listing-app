import React from 'react';
import CarListContainer from '..';
import { carsList, staticData, sortListData } from '../../../constants/testMockConstants';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { renderWithRedux } from '../../../utils/testUtils';

describe('CarListContainer component', () => {
  const getCarList = jest.fn();
  const getStaticData = jest.fn();

  it('CarListContainer rendered without crash', async () => {
    const { unmount, debug } = renderWithRedux(
      <CarListContainer
        manufacturers={staticData.manufacturers}
        colors={staticData.colors}
        cars={carsList.data}
        error={false}
        loading={false}
        staticDataError={false}
        staticDataLoading={false}
        sortList={sortListData}
        totalPageCount={100}
        getStaticData={getStaticData}
        getCarList={getCarList}
      />,
    );
    debug();
    unmount();
  });
});
