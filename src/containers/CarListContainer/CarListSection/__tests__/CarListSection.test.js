import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { carsList, sortListData } from '../../../../constants/testMockConstants';
import CarListSection from '../index';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('CarListSection component', () => {
  const changePageNo = jest.fn();
  const handleDropDownChange = jest.fn();
  it('CarList displayed successfully', () => {
    const { unmount, getByText } = render(
      <Router>
        <CarListSection
          loading={false}
          error={false}
          page={1}
          totalPageCount={10}
          sort={''}
          sortList={sortListData}
          handleDropDownChange={handleDropDownChange}
          cars={carsList.data}
          changePageNo={changePageNo}
        />
      </Router>,
    );
    expect(getByText('First')).toHaveAttribute('class', 'link');
    expect(getByText('Fiat Marea')).toHaveAttribute('class', 'name');
    unmount();
  });
  it('Loader displayed successfully', () => {
    const { unmount, getByTestId } = render(
      <Router>
        <CarListSection
          loading={true}
          error={false}
          page={1}
          totalPageCount={10}
          sort={''}
          sortList={sortListData}
          handleDropDownChange={handleDropDownChange}
          cars={carsList.data}
          changePageNo={changePageNo}
        />
      </Router>,
    );
    getByTestId('loader');
    unmount();
  });
  it('Error message displayed successfully', () => {
    const { unmount, getByText, debug } = render(
      <Router>
        <CarListSection
          loading={false}
          error={404}
          page={1}
          totalPageCount={10}
          sort={''}
          sortList={sortListData}
          handleDropDownChange={handleDropDownChange}
          cars={[]}
          changePageNo={changePageNo}
        />
      </Router>,
    );
    debug();
    expect(getByText('Error - 404 occured')).toHaveAttribute('class', 'heading2');
    unmount();
  });
});
