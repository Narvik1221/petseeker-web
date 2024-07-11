import React, { useState, ChangeEvent } from "react";
import { useLoginMutation } from "../../../entities/user/index";
import { useAppDispatch } from "../../../shared/hooks";
import { setToken } from "../../../entities/user/index";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/button";
import { AUTH_ROUTE } from "../../../app/router/consts";
import { REGISTRATION_ROUTE } from "../../../app/router/consts";
import styles from "./auth.module.scss";
import {  useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
//Провести декомпозицию!
export const Auth: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = location.pathname === AUTH_ROUTE;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(phoneNumber);
    e.preventDefault();
    try {
      const result = await login({ phoneNumber, name }).unwrap();
      dispatch(setToken(result.token));
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setPhoneNumber(value);
  };

  const changeAuth = () => {
    isAuth ? navigate(REGISTRATION_ROUTE) : navigate(AUTH_ROUTE);
  };

  const handleCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const masked = value.replace(/\D/g, "_").substring(0, 6);
    setCode(masked);
  };
  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>PetSeeker</h1>
      <div className={styles.auth__top}>
        <Button onClick={changeAuth} isDefault={isAuth ? true : false}>
          Вход
        </Button>
        <Button onClick={changeAuth} isDefault={isAuth ? false : true}>
          Регистрация
        </Button>
      </div>
      <form className={styles.auth__form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Номер
          <InputMask
            placeholder="+7 ("
            mask="+7 (999) 999 99 99"
            maskChar="_"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          >
            {(inputProps: any) => <Input {...inputProps} />}
          </InputMask>
        </label>
        <label className={styles.label}>
          Имя
          <Input
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
            placeholder="Имя"
          />
        </label>

        {/* <InputMask
          mask="999999"
          maskChar="_"
          value={code}
          onChange={handleCode}
          placeholder="______"
          style={{ letterSpacing: "6px", textAlign: "center" }}
        >
          {(inputProps: any) => <Input {...inputProps} />}
        </InputMask> */}
        <Button type="submit" disabled={isLoading}>
          {isAuth ? "Войти" : "Регистрация"}
        </Button>
      </form>
    </div>
  );
};
