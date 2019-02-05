import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import SaveFavourite from '..';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('SaveFavourite component', () => {
  const saveFavourite = jest.fn();
  it('SaveFavourite displayed in Saved state', () => {
    const { unmount, getByText } = render(<SaveFavourite favourite={true} saveFavourite={saveFavourite} />);
    const button = getByText('Saved');
    expect(button).toHaveClass('btn btn-pressed');
    fireEvent.click(button);
    expect(saveFavourite).toBeCalled();
    unmount();
  });
  it('SaveFavourite displayed in unsaved state', () => {
    const { unmount, getByText } = render(<SaveFavourite favourite={false} saveFavourite={saveFavourite} />);
    const button = getByText('Save');
    expect(button).not.toHaveClass('btn btn-pressed');
    fireEvent.click(button);
    expect(saveFavourite).toBeCalled();
    unmount();
  });
});
