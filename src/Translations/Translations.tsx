import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        PrivateCabinetScreen: {
          Header: {
            Выйти: "Выйти",
          },

          Credentials: {
            Имя: "Имя",
            Фамилия: "Фамилия",
            Email: "Email",
            НомерТелефона: "Номер телефона",
            Регион: "Регион",
            Пароль: "Пароль",
          },

          CreditCard: {
            КартаОплаты: "Карта оплаты",
            ПривязатьКарту: "Привязать карту",
          },

          OrdersList: {
            ИсторияЗаказов: "История заказов",
            ПоказатьВсеЗаказы: "Показать все заказы",
          },

          Bonuses: {
            Бонусы: "Бонусы",
            УВас: "У вас",
            Бонусов: "бонусов",
            УзнатьКакПотратить: "Узнать как потратить",
          },

          LanguageSection: {
            ЯзыкПриложения: "Язык приложения",
          },
        },
      },
    },

    ua: {
      translation: {},
    },
  },
  lng: "ru",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
})
