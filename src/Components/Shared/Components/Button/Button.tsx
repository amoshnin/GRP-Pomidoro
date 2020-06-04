// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  buttonStyle: any
  textStyle: any
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <RectButton style={{ ...styles.container, ...props.buttonStyle }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>
        Узнать, где мой заказ
      </Text>
    </RectButton>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingHorizontal: 80,
    paddingVertical: 10,
  },

  text: {
    letterSpacing: 0.3,
    fontWeight: "600",
  },
})

export default Button
