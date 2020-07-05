// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

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
  return (
    <View>
      {props.UserCredentials.name && (
        <FakeInputComponent
          title={"Имя"}
          content={props.UserCredentials.name as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.surname && (
        <FakeInputComponent
          title={"Фамилия"}
          content={props.UserCredentials.surname as string}
          navigation={props.navigation}
        />
      )}

      {props.UserCredentials.email && (
        <FakeInputComponent
          title={"Email"}
          content={props.UserCredentials.email as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.phoneNum && (
        <FakeInputComponent
          title={"Номер телефона"}
          content={props.UserCredentials.phoneNum as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.region && (
        <FakeInputComponent
          title={"Регион"}
          content={props.UserCredentials.region as string}
          navigation={props.navigation}
        />
      )}
      {props.UserCredentials.password && (
        <FakeInputComponent
          title={"Пароль"}
          content={props.UserCredentials.password as string}
          navigation={props.navigation}
        />
      )}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({})

export default Credentials
