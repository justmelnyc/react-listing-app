import cx from 'classnames';
import React from 'react';
import { IButtonProps } from './Button';
import './Button.scss';

const Button: React.FunctionComponent<IButtonProps> = props => {
  const { label, isPressed, onClick } = props;
  return (
    <div className={cx('btn', { 'btn-pressed': isPressed })} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
