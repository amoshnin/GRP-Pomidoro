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
