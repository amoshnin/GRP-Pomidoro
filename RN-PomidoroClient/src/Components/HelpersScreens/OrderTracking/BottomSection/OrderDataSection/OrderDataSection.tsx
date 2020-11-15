// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  orderID: string
  delivered: boolean
  date: string
}

const OrderDataSection: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Text weight="bold" size={20} style={styles.title}>
          Заказ №{props.orderID}
        </Text>
        <Text weight="bold" size={16}>
          Дата {props.date}
        </Text>
      </View>
      <View style={styles.block_wrap}>
        <Text color="white" size={16} weight="bold" style={styles.block_text}>
          Статус: {!props.delivered ? "в пути" : "доставлен"}
        </Text>
      </View>
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },

  title: {
    letterSpacing: 0.3,
    marginBottom: 12.02,
  },

  block_wrap: {
    height: 55,
    marginTop: 16.19,
    backgroundColor: "#1A1824",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  block_text: {
    letterSpacing: 0.3,
  },
})

export default OrderDataSection
