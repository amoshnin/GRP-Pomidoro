// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// COMPONENTS IMPORTS //
import ProductsBasketList from "~/Components/Shared/Sections/ProductsBasketList/ProductsBasketList"
import OrderDetailsSection from "~/Components/Shared/Sections/OrderDetailsSection/OrderDetailsSection"

import { removeDuplicates } from "~/Components/Shared/Helpers/RemoveDuplicatesFunction"

// EXTRA IMPORTS //
import { MaterialCommunityIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  OrderBonusesUsed: string
  DeliveryType: {
    adress: string
    comment: string
  }
  PaymentMethod: string

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

const SuccesfulPaymentScreen: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)
  const CleanedOrdersList = removeDuplicates(props.OrderItemsList, "price")

  useEffect(() => {
    setTotalPrice(
      CleanedOrdersList.reduce((a: any, b: any) => a + (b["price"] || 0), 0)
    )
  }, [CleanedOrdersList])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30}>
        Заказ успешно оформлен{" "}
        <MaterialCommunityIcons
          name="check-bold"
          size={24}
          color="#96A637"
          style={styles.header_icon}
        />
      </Text>
      <Button
        onPress={() => props.navigation.navigate("OrderTracking")}
        text="Отследить заказ"
        buttonStyle={{
          marginTop: 30,
          backgroundColor: "#96A637",
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
        }}
      />
      <Button
        onPress={() => props.navigation.navigate("MainScreen")}
        text="На главную"
        buttonStyle={{
          marginTop: 19,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          fontSize: 16,
        }}
      />
      <View style={styles.divider} />
      <ProductsBasketList
        Products={CleanedOrdersList}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
        removeItemFromOrderActionCreator={
          props.removeItemFromOrderActionCreator
        }
      />
      <OrderDetailsSection
        navigation={props.navigation}
        totalPrice={totalPrice}
        bonusesCount={Number(props.OrderBonusesUsed)}
        deliveryPrice={0}
        adress={props.DeliveryType.adress}
        cardNum={props.PaymentMethod}
      />
      <Button
        text="Связаться с оператором"
        buttonStyle={{
          marginBottom: 20,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          fontSize: 16,
        }}
        onPress={() => {}}
      />
      <Button
        onPress={() => props.navigation.navigate("BackCallScreen")}
        text="Заказать обратный звонок"
        buttonStyle={{
          marginBottom: 20,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          fontSize: 16,
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 26,
  },

  header_icon: {
    paddingLeft: 100,
  },

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
  },
})

export default SuccesfulPaymentScreen
