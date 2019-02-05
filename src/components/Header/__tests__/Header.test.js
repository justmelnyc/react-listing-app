import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../index';
import 'react-testing-library/cleanup-after-each';

describe('Header component', () => {
  it('renders Header successfully', () => {
    const { unmount } = render(
      <Router>
        <Header />
      </Router>,
    );
    unmount();
  });
});
