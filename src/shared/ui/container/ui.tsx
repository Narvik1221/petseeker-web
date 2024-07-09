import React from "react";
import * as stylex from "@stylexjs/stylex";
import styles from "./ui.style";
type ContainerProps = {
  children?: React.ReactNode;
};
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div {...stylex.props(styles.container)}>{children}</div>;
};
