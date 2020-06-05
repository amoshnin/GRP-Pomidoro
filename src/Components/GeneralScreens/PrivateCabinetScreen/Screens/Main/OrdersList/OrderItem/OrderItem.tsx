// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const OrderItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={16} style={styles.title}>
        24.03.2019 - Доставлен
      </Text>
      <View style={styles.foods_list}>
        <Text style={styles.food_text}>Паперони спайс × 2шт</Text>
        <Text style={styles.food_text}>Четыре мяса × 1 шт </Text>
        <Text style={styles.food_text}>Конкорд × 1 шт </Text>
        <Text style={styles.food_text}>Pepsi 1литр × 1 шт</Text>
      </View>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Добавить весь заказ в корзину</Text>
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
  },

  food_text: {
    lineHeight: 26,
  },

  divider: {
    borderBottomColor: "#EAEAEB",
    borderBottomWidth: 1,
  },

  button: {},

  button_text: {
    marginTop: 17,
    paddingBottom: 3,
    color: "#96A637",
    fontSize: 16,
  },
})

export default OrderItem
