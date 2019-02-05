import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../index';
import { carDetails } from '../../../constants/testMockConstants';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('Card component', () => {
  it('renders Card successfully', () => {
    const { unmount, getByTestId } = render(
      <Router>
        <Card data={carDetails} />
      </Router>,
    );
    const name = getByTestId('car_name');
    expect(name).toHaveTextContent(`${carDetails.manufacturerName} ${carDetails.modelName}`);
    unmount();
  });
});
