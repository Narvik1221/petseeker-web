import React from 'react';
import * as stylex from '@stylexjs/stylex';
import styles from './button.style';
type ButtonProps = {
  onClick: (event:any) => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button {...stylex.props(styles.default)} onClick={onClick}>{children}</button>;
};

export default Button;
