import React from 'react';
import { render } from 'react-testing-library';
import Footer from '..';
import 'react-testing-library/cleanup-after-each';

describe('Footer component', () => {
  it('renders Footer successfully', () => {
    const { unmount } = render(<Footer />);
    unmount();
  });
});
