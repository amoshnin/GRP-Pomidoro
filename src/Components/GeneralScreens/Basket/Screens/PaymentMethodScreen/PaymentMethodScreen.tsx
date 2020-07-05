// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  OrderItemsList: Array<{}>
}

const PaymentMethodScreen: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  useEffect(() => {
    setTotalPrice(
      props.OrderItemsList.reduce((prev: any, current: any) => {
        return prev + +current.price
      }, 0)
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text size={30} weight="bold">
        Способ оплаты
      </Text>
      <Header totalPrice={totalPrice} />
      <Body navigation={props.navigation} totalPrice={totalPrice} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default PaymentMethodScreen
