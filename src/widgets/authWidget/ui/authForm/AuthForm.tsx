// src/entities/user/model/authWidget.ts
import React, { ChangeEvent } from "react";
import { Input } from "../../../../shared/ui/Input";
import { Button } from "../../../../shared/ui/button";
import { AUTH_ROUTE, REGISTRATION_ROUTE } from "../../../../app/router/consts";
import styles from "../auth.module.scss";
import InputMask from "react-input-mask";
import {
  phoneConsts,
  nameConsts,
} from "../../../../shared/constants";
type AuthFormProps = {
  handleClickSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangePhone?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumber?: string;
  name?: string;
  isSendingLogin?: boolean;
  isAuth?: boolean;
};
export const AuthForm: React.FC<AuthFormProps> = ({
  handleClickSubmit,
  handleChangePhone,
  handleChangeName,
  isAuth,
  phoneNumber,
  name,
  isSendingLogin,
}) => {
  const textAuthButton = isAuth ? "Войти" : "Регистрация";
  return (
    <form className={styles.auth__form}>
      <label className={styles.label}>
        Номер
        <InputMask
          placeholder={phoneConsts.placeholder}
          mask={phoneConsts.mask}
          maskChar={phoneConsts.maskChar}
          value={phoneNumber}
          onChange={handleChangePhone}
        >
          {(inputProps: any) => <Input {...inputProps} />}
        </InputMask>
      </label>
      {!isAuth && (
        <label className={styles.label}>
          Имя
          <Input
            value={name}
            onChange={handleChangeName}
            placeholder={nameConsts.placeholder}
          />
        </label>
      )}

      <Button
        type="button"
        onClick={handleClickSubmit}
        disabled={isSendingLogin}
      >
        {textAuthButton}
      </Button>
    </form>
  );
};
