// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "../../../../../Shared/Components/Button/Button"

// COMPONENTS IMPORTS //
import OrderItem from "./OrderItem/OrderItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const OrdersList: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={20} style={styles.title}>
        История заказов
      </Text>

      <OrderItem />
      <OrderItem />

      <Button
        text={"Показавать все заказы"}
        buttonStyle={{
          borderWidth: 1,
          borderColor: "#EAEAEB",
          borderRadius: 20,
          marginTop: 20,
        }}
        rectStyle={{
          width: 315,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginBottom: 36,
  },

  title: {
    marginTop: 23,
  },
})

export default OrdersList
