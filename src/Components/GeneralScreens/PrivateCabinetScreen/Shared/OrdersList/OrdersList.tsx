// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import OrderItem from "./OrderItem/OrderItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  showFullList: boolean
  showTiming: boolean
  shwowDeliveryStatus: boolean
}

const OrdersList: React.FC<PropsType> = (props) => {
  return (
    <>
      <Text weight="bold" size={20} style={styles.title}>
        {props.title}
      </Text>

      <OrderItem
        title={"24.03.2019 - Доставлен"}
        productsList={[
          "Паперони спайс × 2шт",
          "Четыре мяса × 1 шт ",
          "Конкорд × 1 шт",
          "Pepsi 1литр × 1 шт",
        ]}
        buttonText={"Добавить весь заказ в корзину"}
        showTiming={props.showTiming}
      />
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  title: {
    marginTop: 23,
  },
})

export default OrdersList
