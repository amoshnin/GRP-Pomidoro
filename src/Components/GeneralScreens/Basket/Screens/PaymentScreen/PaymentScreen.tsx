// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"
import { useTranslation } from "react-i18next"

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

  SendOrderDataThunkCreator: () => any
}

const PaymentScreen: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)
  const { t } = useTranslation()

  const CleanedOrdersArray = removeDuplicates(props.OrderItemsList, "price")
  useEffect(() => {
    setTotalPrice(
      CleanedOrdersArray.reduce((prev: any, current: any) => {
        return prev + +current.price
      }, 0)
    )
  }, [CleanedOrdersArray])

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
        text={t("GeneralPhrases.Оплатить")}
        saveFunction={() => {
          props.SendOrderDataThunkCreator().then(() => {
            props.navigation.navigate("SuccesfulPaymentScreen")
          })
        }}
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
