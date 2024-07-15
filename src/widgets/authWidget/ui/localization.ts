
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "PetSeeker": "PetSeeker",
          "Login": "Login",
          "Register": "Register",
          "AgreeMessage": "By clicking the login button, you accept the terms of the User Agreement and the Privacy Policy"
        }
      },
      ru: {
        translation: {
          "PetSeeker": "PetSeeker",
          "Login": "Вход",
          "Register": "Регистрация",
          "AgreeMessage": "Нажимая кнопку входа, вы принимаете условия Пользовательского соглашения и Политики Конфиденциальности"
        }
      }
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
