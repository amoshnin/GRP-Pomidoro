// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  productsList: Array<{ title: string; count: string | number }>
  buttonText: string

  showTiming: boolean
}

const OrderItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={16} style={styles.title}>
        {props.title}
      </Text>
      <View style={styles.foods_list}>
        {props.productsList &&
          props.productsList.length > 0 &&
          props.productsList.map(
            (product: { title: string; count: string | number }) => {
              return (
                <Text style={styles.food_text} key={product.title}>
                  {product.title}
                </Text>
              )
            }
          )}
      </View>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#cdcdcd",
  },

  title: {
    paddingHorizontal: 19.5,
    marginBottom: 9,
  },

  foods_list: {
    paddingHorizontal: 19.5,
    flexDirection: "column",
    marginBottom: 13,
  },

  food_text: {
    lineHeight: 26,
  },

  divider: {
    borderBottomColor: "#EAEAEB",
    borderBottomWidth: 1,
  },

  button: {
    alignItems: "center",
  },

  button_text: {
    marginTop: 17,
    paddingBottom: 3,
    color: "#96A637",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
})

export default OrderItem
