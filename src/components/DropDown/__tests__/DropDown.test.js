import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import DropDown, { getSelectedValue } from '..';
import { staticData } from '../../../constants/testMockConstants';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('Button component', () => {
  it('renders button successfully', () => {
    const dropDownFunction = jest.fn();
    const { unmount, getByTestId, getByText, queryByLabelText } = render(
      <DropDown
        label="Color"
        dropDownName="color"
        selectedValue={staticData.colors[0]}
        list={staticData.colors}
        onChange={dropDownFunction}
      />,
    );
    fireEvent.click(getByTestId('select-box'));
    expect(getByTestId('options')).not.toBeNull();
    fireEvent.click(getByText('red'));
    expect(dropDownFunction).toBeCalled();
    expect(queryByLabelText('red')).toBeNull();
    unmount();
  });
  it('chooses the right label', () => {
    const selectedValue = staticData.colors[0].value;
    const list = staticData.colors;
    expect(getSelectedValue(list, selectedValue)).toBe('red');
  });
});
