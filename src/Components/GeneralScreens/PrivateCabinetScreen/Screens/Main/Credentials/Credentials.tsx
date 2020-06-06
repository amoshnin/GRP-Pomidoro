// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import FakeInputComponent from "./Components/FakeInputComponent/FakeInputComponent"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Credentials: React.FC<PropsType> = (props) => {
  return (
    <View>
      <FakeInputComponent
        title={"Имя"}
        content={"Илья"}
        navigation={props.navigation}
      />
      <FakeInputComponent
        title={"Фамилия"}
        content={"Давыдов"}
        navigation={props.navigation}
      />
      <FakeInputComponent
        title={"Email"}
        content={"niculici.victor@gmail.com"}
        navigation={props.navigation}
      />
      <FakeInputComponent
        title={"Номер телефона"}
        content={"+4 0767 217 315 "}
        navigation={props.navigation}
      />
      <FakeInputComponent
        title={"Регион"}
        content={"Москва"}
        navigation={props.navigation}
      />
      <FakeInputComponent
        title={"Пароль"}
        content={"**********"}
        navigation={props.navigation}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({})

export default Credentials
