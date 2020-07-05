// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductsBasketList from "~/Components/Shared/Sections/ProductsBasketList/ProductsBasketList"
import OrderDetailsSection from "~/Components/Shared/Sections/OrderDetailsSection/OrderDetailsSection"

// EXTRA IMPORTS //

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

  const removeDuplicates = (originalArray: Array<any>, prop: any) => {
    var newArray = [] as any
    var lookupObject = {} as any

    originalArray = originalArray.map((item: any) => {
      return {
        ...item,
        name: item.name + item.size,
      }
    })

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i]
    }

    for (i in lookupObject) {
      const FilteredArray = originalArray.filter((orderItem: any) => {
        return orderItem.name === lookupObject[i].name
      })

      const price = FilteredArray.reduce((prev: any, current: any) => {
        return prev + +current.price
      }, 0)

      const count = FilteredArray.reduce((prev: any, current: any) => {
        return prev + +1
      }, 0)

      newArray.push({
        ...lookupObject[i],
        price: price,
        count: count,
      })
    }
    const CleanedArray = newArray.map((item: any) => {
      return {
        ...item,
        name: item.name.replace(item.size, ""),
      }
    })

    return CleanedArray
  }

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
