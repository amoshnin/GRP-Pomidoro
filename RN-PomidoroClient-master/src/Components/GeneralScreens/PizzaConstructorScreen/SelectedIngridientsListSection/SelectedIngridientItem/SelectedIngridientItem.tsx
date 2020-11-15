// PLUGINS IMPORTS //
import React from "react"
import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  name: string
  image: string
  price: number
  count: number

  removeFullIngridientActionCreator: (ingridientName: string) => void
}

const SelectedIngridientItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("~/Images/product-large-1.png")}
      />
      <Text style={styles.text}>
        {props.count} x {props.name}:{"   "}
        {props.price} ₴
      </Text>
      <TouchableOpacity
        onPress={() => props.removeFullIngridientActionCreator(props.name)}
      >
        <Ionicons name="ios-close-circle" size={20} color="#F56D6D" />
      </TouchableOpacity>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    height: 24,
    width: 24,
  },

  text: {
    marginHorizontal: 10,
    letterSpacing: 0.3,
  },
})

export default SelectedIngridientItem
