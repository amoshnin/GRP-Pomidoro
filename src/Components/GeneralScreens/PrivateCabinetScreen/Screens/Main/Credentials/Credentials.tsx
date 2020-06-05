// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import FakeInputComponent from "./Components/FakeInputComponent/FakeInputComponent"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Credentials: React.FC<PropsType> = (props) => {
  return (
    <View>
      <FakeInputComponent title={"Имя"} content={"Илья"} />
      <FakeInputComponent title={"Фамилия"} content={"Давыдов"} />
      <FakeInputComponent
        title={"Email"}
        content={"niculici.victor@gmail.com"}
      />
      <FakeInputComponent
        title={"Номер телефона"}
        content={"+4 0767 217 315 "}
      />
      <FakeInputComponent title={"Регион"} content={"Москва"} />
      <FakeInputComponent title={"Пароль"} content={"**********"} />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({})

export default Credentials
