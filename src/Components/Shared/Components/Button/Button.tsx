// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  text: string

  buttonStyle?: any
  rectStyle?: any
  textStyle?: any
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.buttonStyle }}>
      <RectButton style={props.rectStyle}>
        <Text style={{ ...styles.text, ...props.textStyle }} weight="bold">
          {props.text}
        </Text>
      </RectButton>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    letterSpacing: 0.3,
  },
})

export default Button
