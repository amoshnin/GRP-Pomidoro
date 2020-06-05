// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

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
      <Text style={{ ...styles.text, ...props.textStyle }} weight="bold">
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
  },
})

export default Button
