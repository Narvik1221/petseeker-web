import React, { useState, ChangeEvent } from "react";
import {
  useLoginMutation,
  useConfirmMutation,
} from "../../../entities/user/index";
import { useAppDispatch } from "../../../shared/hooks";
import { setToken } from "../../../entities/user/index";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/button";
import { AUTH_ROUTE } from "../../../app/router/consts";
import { REGISTRATION_ROUTE } from "../../../app/router/consts";
import styles from "./auth.module.scss";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
//Провести декомпозицию!
export const Auth: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = location.pathname === AUTH_ROUTE;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const [login, { isLoading: isSendingLogin }] = useLoginMutation();
  const [confirm, { isLoading: isSendingConfirm }] = useConfirmMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    console.log(phoneNumber.length)
    console.log(phoneNumber)
    if (phoneNumber.length === 11) {
      try {
        const response = await login({ phoneNumber, name }).unwrap();
        if (response.success) {
          setIsConfirm(true);
        }
      } catch (err) {
        console.error("Failed to login", err);
      }
    }
  };

  const handleConfirm = async () => {
    console.log(code);
    if(phoneNumber.length === 11 && code.length===6){
      try {
        const response = await confirm({ phoneNumber, code }).unwrap();
  
        if (response.success) {
          setIsConfirm(true);
          dispatch(setToken(response.token));
        }
      } catch (err) {
        console.error("Failed to confirm", err);
      }
    }

  };

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const onlyNumbers = value.replace(/\D/g, '');
    setPhoneNumber(onlyNumbers);
  };

  const handleCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const masked = value.replace(/\D/g, "_");
    setCode(masked);
  };
  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>PetSeeker</h1>
      <div className={styles.auth__top}>
        <Button
          onClick={() => navigate(AUTH_ROUTE)}
          isDefault={isAuth ? true : false}
        >
          Вход
        </Button>
        <Button
          onClick={() => navigate(REGISTRATION_ROUTE)}
          isDefault={isAuth ? false : true}
        >
          Регистрация
        </Button>
      </div>
      {!isConfirm ? (
        <form className={styles.auth__form} >
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
          {!isAuth && (
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
          )}

          <Button type="button" onClick={handleSubmit} disabled={isSendingLogin}>
            {isAuth ? "Войти" : "Регистрация"}
          </Button>
        </form>
      ) : (
        <form className={styles.auth__form} onSubmit={handleConfirm}>
          <InputMask
            mask="999999"
            maskChar="_"
            value={code}
            onChange={handleCode}
            placeholder="______"
            style={{ letterSpacing: "6px", textAlign: "center" }}
          >
            {(inputProps: any) => <Input {...inputProps} />}
          </InputMask>
          <Button type="button" onClick={handleConfirm} disabled={isSendingConfirm}>
            {"Далее"}
          </Button>
          <Button isDefault={true}  type="button" onClick={handleSubmit} disabled={isSendingConfirm || isSendingLogin}>
            {"Отправить код повторно"}
          </Button>
        </form>
      )}
    </div>
  );
};
