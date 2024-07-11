import React from "react";
import styles from "./input.module.scss";
type InputProps = {
  onChange?: any;
  placeholder?: string;
  value?: string;
  name?: string;
  style?: any;
  props?: any;
};

export const Input: React.FC<InputProps> = (props) => {
  return <input className={styles.default} type="text" {...props} />;
};
