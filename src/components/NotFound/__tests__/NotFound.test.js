import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../index';
import 'react-testing-library/cleanup-after-each';

describe('NotFound component', () => {
  it('renders NotFound successfully', () => {
    const { unmount } = render(
      <Router>
        <NotFound />
      </Router>,
    );
    unmount();
  });
});
