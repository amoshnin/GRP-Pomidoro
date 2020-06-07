// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"
import { BaseButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const ConfirmAdressScreen: React.FC<PropsType> = (props) => {
  return (
    <>
      <Image
        source={require("../../../../../Images/confirm-adress-map.png")}
        style={styles.image}
      />
      <Body />
      <View style={styles.button_wrap}>
        <BaseButton
          style={styles.button}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </BaseButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button_wrap: {
    position: "absolute",
    backgroundColor: "white",
    elevation: 24,
    top: 45,
    left: 13,
    borderRadius: 100,
  },

  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },
})

export default ConfirmAdressScreen
