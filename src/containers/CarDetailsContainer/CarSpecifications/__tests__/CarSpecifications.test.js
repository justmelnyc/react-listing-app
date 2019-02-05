import React from 'react';
import { render } from 'react-testing-library';
import { carDetails } from '../../../../constants/testMockConstants';
import CarSpecifications from '../index';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('CarSpecifications component', () => {
  it('CarSpecifications displayed in Saved state', () => {
    const { unmount, getByText, debug } = render(<CarSpecifications carDetails={carDetails} />);
    debug();
    expect(getByText('Fiat Marea')).toHaveClass('title');
    unmount();
  });
});
