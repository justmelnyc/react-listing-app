import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { staticData } from '../../../../constants/testMockConstants';
import FilterSection from '..';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('FilterSection component', () => {
  const applyFilter = jest.fn();
  const handleDropDownChange = jest.fn();
  it('Filter function called successfully', () => {
    const { unmount, getByText } = render(
      <FilterSection
        staticDataError={false}
        staticDataLoading={false}
        color="red"
        manufacturer="Audi"
        colors={staticData.colors}
        manufacturers={staticData.manufacturers}
        applyFilter={applyFilter}
        handleDropDownChange={handleDropDownChange}
      />,
    );
    fireEvent.click(getByText('Filter'));
    expect(applyFilter).toBeCalled();
    unmount();
  });
  it('Loader displayed successfully', () => {
    const { unmount, getByTestId } = render(
      <FilterSection
        staticDataError={false}
        staticDataLoading={true}
        color="red"
        manufacturer="Audi"
        colors={staticData.colors}
        manufacturers={staticData.manufacturers}
        applyFilter={applyFilter}
        handleDropDownChange={handleDropDownChange}
      />,
    );
    getByTestId('loader');
    unmount();
  });
  it('Error message displayed successfully', () => {
    const { unmount, getByTestId } = render(
      <FilterSection
        staticDataError={404}
        staticDataLoading={false}
        color="red"
        manufacturer="Audi"
        colors={staticData.colors}
        manufacturers={staticData.manufacturers}
        applyFilter={applyFilter}
        handleDropDownChange={handleDropDownChange}
      />,
    );
    expect(getByTestId('error')).not.toBeNull();
    unmount();
  });
});
