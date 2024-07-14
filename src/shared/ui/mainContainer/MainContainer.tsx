import React, { CSSProperties } from "react";
import styles from './mainContainer.module.scss'
type ContainerProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};

export const MainContainer: React.FC<ContainerProps> = ({
  style,
  children,
}) => {

  return <div className={styles.container}  style={style}>{children}</div>;
};


