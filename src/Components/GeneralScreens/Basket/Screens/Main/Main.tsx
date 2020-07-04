// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductsBasketList from "~/Components/Shared/Sections/ProductsBasketList/ProductsBasketList"
import OrderDetailsSection from "~/Components/Shared/Sections/OrderDetailsSection/OrderDetailsSection"
import BonusesSection from "./BonusesSection/BonusesSection"
import Footer from "./Footer/Footer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  OrderItemsList: Array<any>

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
}

const Main: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  useEffect(() => {
    setTotalPrice(
      props.OrderItemsList.reduce((prev: any, current: any) => {
        return prev + +current.price
      }, 0)
    )
  }, [])

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
    const CleanArray = newArray.map((item: any) => {
      return {
        ...item,
        name: item.name.replace(item.size, ""),
      }
    })

    return CleanArray
  }

  const FilteredBasketList = removeDuplicates(props.OrderItemsList, "name")

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header productsCount={props.OrderItemsList.length} />
      <ProductsBasketList
        Products={FilteredBasketList}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
      <OrderDetailsSection
        totalPrice={totalPrice}
        navigation={props.navigation}
      />
      <BonusesSection />
      <Footer navigation={props.navigation} />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default Main
