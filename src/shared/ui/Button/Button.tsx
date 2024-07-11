import React from "react";
import styles from "./button.module.scss";
type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isDefault?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  disabled,
  isDefault,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={isDefault ? styles.default : styles.active}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
