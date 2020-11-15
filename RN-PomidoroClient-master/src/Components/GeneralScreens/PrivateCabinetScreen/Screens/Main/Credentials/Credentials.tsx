// PLUGINS IMPORTS //
import React from "react"
import { View } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import FakeInputComponent from "./Components/FakeInputComponent/FakeInputComponent"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  UserCredentials: {
    name: string | null
    surname: string | null
    email: string | null
    phoneNum: string | null
    region: string | null
    password: string | null
    avatar: string | null
    userType: string | null
    bonusesCount: string | null
  }
}

const Credentials: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View>
      {props.UserCredentials.name && (
        <FakeInputComponent
          title={t("PrivateCabinetScreen.Credentials.Имя")}
          content={props.UserCredentials.name as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.surname && (
        <FakeInputComponent
          title={t("PrivateCabinetScreen.Credentials.Фамилия")}
          content={props.UserCredentials.surname as string}
          navigation={props.navigation}
        />
      )}

      {props.UserCredentials.email && (
        <FakeInputComponent
          title={t("PrivateCabinetScreen.Credentials.Email")}
          content={props.UserCredentials.email as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.phoneNum && (
        <FakeInputComponent
          title={t("PrivateCabinetScreen.Credentials.НомерТелефона")}
          content={props.UserCredentials.phoneNum as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.region && (
        <FakeInputComponent
          title={t("PrivateCabinetScreen.Credentials.Регион")}
          content={props.UserCredentials.region as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.password && (
        <FakeInputComponent
          title={t("PrivateCabinetScreen.Credentials.Пароль")}
          content={props.UserCredentials.password as string}
          navigation={props.navigation}
        />
      )}
    </View>
  )
}

export default Credentials
