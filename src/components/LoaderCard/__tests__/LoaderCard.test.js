import React from 'react';
import { render } from 'react-testing-library';
import LoaderCard from '..';
import 'react-testing-library/cleanup-after-each';

describe('LoaderCard component', () => {
  it('renders LoaderCard successfully', () => {
    const { unmount } = render(<LoaderCard />);
    unmount();
  });
});
