import React from 'react';
import CarDetailsContainer from '..';
import { carDetails } from '../../../constants/testMockConstants';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { renderWithRedux } from '../../../utils/testUtils';

describe('CarDetailsContainer component', () => {
  const getCarDetails = jest.fn();
  const match = {
    params: 41400,
  };
  it('CarDetailsContainer rendered without crash', async () => {
    const { unmount } = renderWithRedux(
      <CarDetailsContainer
        carDetails={carDetails}
        stockNumber={41400}
        error={false}
        loading={false}
        match={match}
        getCarDetails={getCarDetails}
      />,
    );
    unmount();
  });
});
