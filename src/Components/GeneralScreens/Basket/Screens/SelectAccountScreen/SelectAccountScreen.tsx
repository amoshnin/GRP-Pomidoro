// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import Text from "~/Components/Shared/Components/Text/Text"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const SelectAccountScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text size={20} weight="bold" style={styles.title}>
        Выберите один из вариантов, чтобы заказать
      </Text>
      <Button
        onPress={() => props.navigation.navigate("RegistrationScreen")}
        text="Зарегистрироваться в системе"
        buttonStyle={{
          marginTop: 38,
          width: 315,
          height: 50,
          backgroundColor: "#96A637",
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
        }}
      />
      <Button
        onPress={() => props.navigation.navigate("Auth")}
        text="Войти"
        buttonStyle={{
          marginTop: 15,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "black",
          fontSize: 16,
        }}
      />
      <Button
        onPress={() => props.navigation.navigate("DeliveryTypeSelectionScreen")}
        text="Оформление без регистрации"
        buttonStyle={{
          marginTop: 10,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "black",
          fontSize: 16,
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    marginTop: 25,
    width: 315,
  },
})

export default SelectAccountScreen
