import cx from 'classnames';
import React from 'react';
import './Button.scss';

const Button: React.FunctionComponent<{ label: string; onClick: () => void; isPressed?: boolean }> = props => {
  return (
    <div className={cx('btn', { 'btn-pressed': props.isPressed })} onClick={props.onClick}>
      {props.label}
    </div>
  );
};

export default Button;
