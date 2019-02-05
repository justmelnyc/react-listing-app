import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Paginator from '../index';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('Paginator component', () => {
  const changePageNo = jest.fn();
  it('renders Paginator successfully', () => {
    const { unmount, getByText } = render(<Paginator currentPage={3} totalPages={10} changePageNo={changePageNo} />);
    const firstPage = getByText('First');
    const previousPage = getByText('Previous');
    const lastPage = getByText('Last');
    const nextPage = getByText('Next');
    fireEvent.click(firstPage);
    expect(changePageNo).toBeCalledWith(1);
    fireEvent.click(previousPage);
    expect(changePageNo).toBeCalledWith(2);
    fireEvent.click(lastPage);
    expect(changePageNo).toBeCalledWith(10);
    fireEvent.click(nextPage);
    expect(changePageNo).toBeCalledWith(4);

    unmount();
  });
  it('Press previous from first page', () => {
    const { getByText } = render(<Paginator currentPage={1} totalPages={10} changePageNo={changePageNo} />);
    const previousPage = getByText('Previous');
    fireEvent.click(previousPage);
    expect(changePageNo).toBeCalledWith(1);
  });
  it('Press Next from Last page', () => {
    const { getByText } = render(<Paginator currentPage={10} totalPages={10} changePageNo={changePageNo} />);
    const nextPage = getByText('Next');
    fireEvent.click(nextPage);
    expect(changePageNo).toBeCalledWith(10);
  });
});
