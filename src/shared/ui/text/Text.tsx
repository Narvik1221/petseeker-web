import React, { CSSProperties } from "react";
import styles from "./text.module.scss";
type TextProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};

export const Text: React.FC<TextProps> = ({ style, children }) => {
  return <p className={styles.default} style={style}>{children}</p>;
};
