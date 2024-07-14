// src/entities/user/model/authWidget.ts
import React, { ChangeEvent } from "react";
import {
  useLoginMutation,
  useConfirmMutation,
} from "../../../entities/user/index";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import {
  setToken,
  setPhoneNumber,
  setName,
  setCode,
  setIsConfirm,
} from "../../../entities/user/index";
import { Button } from "../../../shared/ui/button";
import { AUTH_ROUTE, REGISTRATION_ROUTE } from "../../../app/router/consts";
import styles from "./auth.module.scss";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../shared/ui/text";
import { ConfirmForm } from "./confirmForm/ConfirmForm";
import { AuthForm } from "./authForm/AuthForm";
import { match, P } from "ts-pattern";
export const AuthWidget: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const phoneNumber = useAppSelector((state) => state.user.phoneNumber);
  const name = useAppSelector((state) => state.user.name);
  const code = useAppSelector((state) => state.user.code);
  const isConfirm = useAppSelector((state) => state.user.isConfirm);
  const [login, { isLoading: isSendingLogin }] = useLoginMutation();
  const [confirm, { isLoading: isSendingConfirm }] = useConfirmMutation();
  const isAuth = location.pathname === AUTH_ROUTE;
  const handleClickSubmit = async () => {
    if (phoneNumber.length === 11) {
      try {
        const response = await login({ phoneNumber, name }).unwrap();
        if (response.success) {
          dispatch(setIsConfirm(true)); // Assuming you add setIsConfirm action
        }
      } catch (err) {
        console.error("Failed to login", err);
      }
    }
  };

  const handleClickConfirm = async () => {
    if (phoneNumber.length === 11 && code.length === 6) {
      try {
        const response = await confirm({ phoneNumber, code }).unwrap();
        if (response.success) {
          dispatch(setToken(response.token));
        }
      } catch (err) {
        console.error("Failed to confirm", err);
      }
    }
  };

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const onlyNumbers = value.replace(/\D/g, "");
    dispatch(setPhoneNumber(onlyNumbers));
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };

  const handleChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const masked = value.replace(/\D/g, "_");
    dispatch(setCode(masked));
  };

  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>PetSeeker</h1>
      <div className={styles.auth__top}>
        <Button onClick={() => navigate(AUTH_ROUTE)} isDefault={isAuth}>
          Вход
        </Button>
        <Button
          onClick={() => navigate(REGISTRATION_ROUTE)}
          isDefault={!isAuth}
        >
          Регистрация
        </Button>
      </div>

      {match(isConfirm)
        .with(false, () => (
          <AuthForm
            handleClickSubmit={handleClickSubmit}
            handleChangePhone={handleChangePhone}
            handleChangeName={handleChangeName}
            phoneNumber={phoneNumber}
            name={name}
            isAuth={isAuth}
            isSendingLogin={isSendingLogin}
          ></AuthForm>
        ))
        .with(true, () => (
          <ConfirmForm
            isSendingConfirm={isSendingConfirm}
            isSendingLogin={isSendingLogin}
            handleClickConfirm={handleClickConfirm}
            handleClickSubmit={handleClickSubmit}
            handleChangeCode={handleChangeCode}
          ></ConfirmForm>
        ))
        .exhaustive()}
      <Text style={{ textAlign: "center" }}>
        Нажимая кнопку входа, вы принимаете условия Пользовательского соглашения
        и Политики Конфиденциальности
      </Text>
    </div>
  );
};
