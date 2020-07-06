// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  cardNum: string
  OrderItemsList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>

  setPaymentMethodActionCreator: (paymentMethod: string) => void
}

const PaymentMethodScreen: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)
  const { t } = useTranslation()

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
        {t("OrderingProcess.Fields.СпособОплаты")}
      </Text>
      <Header totalPrice={totalPrice} />
      <Body
        navigation={props.navigation}
        totalPrice={totalPrice}
        cardNum={props.cardNum}
        setPaymentMethodActionCreator={props.setPaymentMethodActionCreator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default PaymentMethodScreen
