// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductsBasketList from "~/Components/Shared/Sections/ProductsBasketList/ProductsBasketList"
import OrderDetailsSection from "~/Components/Shared/Sections/OrderDetailsSection/OrderDetailsSection"

// EXTRA IMPORTS //
import { removeDuplicates } from "~/Components/Shared/Helpers/RemoveDuplicatesFunction"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  DeliveryTime: string
  OrderItemsList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void

  removeItemFromOrderActionCreator: (
    title: string,
    size: string,
    id: string
  ) => void
}

const PaymentScreen: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  useEffect(() => {
    setTotalPrice(
      props.OrderItemsList.reduce((prev: any, current: any) => {
        return prev + +current.price
      }, 0)
    )
  }, [])

  const CleanedOrdersArray = removeDuplicates(props.OrderItemsList, "price")

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header DeliveryTime={props.DeliveryTime} />
      <ProductsBasketList
        Products={CleanedOrdersArray}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
        removeItemFromOrderActionCreator={
          props.removeItemFromOrderActionCreator
        }
      />
      <OrderDetailsSection
        totalPrice={totalPrice}
        navigation={props.navigation}
      />
      <PayButton
        navigation={props.navigation}
        destination="SuccesfulPaymentScreen"
        price={totalPrice}
        text="Оплатить"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default PaymentScreen
