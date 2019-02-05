import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../index';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

describe('Button component', () => {
  const btnFn = jest.fn();
  const label = 'Click';
  it('renders button successfully', () => {
    const { unmount, getByText } = render(<Button label={label} onClick={btnFn} isPressed={true} />);
    const button = getByText(label);
    expect(button).toHaveAttribute('class', 'btn btn-pressed');
    fireEvent.click(button);
    expect(btnFn).toBeCalled();
    unmount();
  });
  it('button not pressed', () => {
    const { unmount, getByText } = render(<Button label={label} onClick={btnFn} isPressed={false} />);
    const button = getByText(label);
    expect(button).not.toHaveAttribute('class', 'btn btn-pressed');
    unmount();
  });
});
