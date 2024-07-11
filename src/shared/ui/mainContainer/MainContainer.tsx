import React, { CSSProperties } from "react";
import styles from './mainContainer.module.scss'
type ContainerProps = {
  children?: React.ReactNode;
  customStyles?: CSSProperties;
};

export const MainContainer: React.FC<ContainerProps> = ({
  customStyles,
  children,
}) => {

  return <div className={styles.container}  style={customStyles}>{children}</div>;
};


