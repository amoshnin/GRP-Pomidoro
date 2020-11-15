// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  destination: string
  buttonStyle?: any

  price: number
  text: string
  saveFunction?: any
}

const PayButton: React.FC<PropsType> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.buttonStyle }}>
      <Text size={16} weight="bold" color="white">
        {props.price} ₴
      </Text>

      <TouchableOpacity
        onPress={() => {
          if (props.saveFunction) {
            props.saveFunction()
          }
          props.navigation.navigate(props.destination)
        }}
      >
        <Text size={16} weight="bold" color="white">
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 156,
    marginTop: 14,
    backgroundColor: "#96A637",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18.5,
    paddingVertical: 15,
    borderRadius: 6,
  },
})

export default PayButton
