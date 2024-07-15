// src/entities/user/model/authWidget.ts
import React, { ChangeEvent } from "react";
import { Input } from "../../../../shared/ui/Input";
import { Button } from "../../../../shared/ui/button";
import styles from "../auth.module.scss";
import InputMask from "react-input-mask-next";
import { phoneConsts, nameConsts } from "../../../../shared/constants";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("authForm");
  const textAuthButton = isAuth ? t("enter") : t("registration");
  return (
    <form className={styles.auth__form}>
      <label className={styles.label}>
        {t("number")}
        <InputMask
          onChange={handleChangePhone}
          value={phoneNumber}
          mask={phoneConsts.mask}
          placeholder={phoneConsts.placeholder}
        >
          <Input />
        </InputMask>
      </label>

      {!isAuth && (
        <label className={styles.label}>
          {t("name")}
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
