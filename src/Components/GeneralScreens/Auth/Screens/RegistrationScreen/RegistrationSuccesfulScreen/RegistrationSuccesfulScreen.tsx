// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"

import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RegistrationSuccesfulScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../../../../Images/succesful.png")} />
      <Text size={30} weight="bold" style={styles.title}>
        Регистрация прошла успешно
      </Text>
      <Text size={16} style={styles.text}>
        Теперь вы можете воспользоваться всеми преимуществами приложения
      </Text>
      <Button
        text="Войти"
        onPress={() => props.navigation.navigate("LoginScreen")}
        textStyle={{
          color: "white",
          fontSize: 16,
          letterSpacing: 0.3,
        }}
        buttonStyle={{
          backgroundColor: "#96A637",
          width: 315,
          height: 50,
          borderRadius: 6,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 49.25,
    textAlign: "center",
    width: 342.19,
    letterSpacing: 0.3,
  },

  text: {
    marginTop: 20,
    marginBottom: 25,
    width: 296,
    textAlign: "center",
  },
})

export default RegistrationSuccesfulScreen
