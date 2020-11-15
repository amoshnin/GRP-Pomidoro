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
import { removeDuplicates } from "~/Components/Shared/Helpers/RemoveDuplicatesFunction"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  OrderItemsList: Array<any>
  UserCredentials: {
    name: string | null
    surname: string | null
    email: string | null
    phoneNum: string | null
    region: string | null
    password: string | null
    avatar: string | null
    userType: string | null
    bonusesCount: string | null
  }
  OrderBonusesUsed: string

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>,
    id: string
  ) => void
  removeItemFromOrderActionCreator: (
    title: string,
    size: string,
    id: string
  ) => void
  setBonusesCountActionCreator: (bonusesCount: string) => void
  getUserFullInfoThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  useEffect(() => {
    props.getUserFullInfoThunkCreator()
  }, [])

  useEffect(() => {
    setTotalPrice(
      props.OrderItemsList.reduce((prev: any, current: any) => {
        return prev + +current.price
      }, 0)
    )
  }, [props.OrderItemsList])

  const FilteredBasketList = removeDuplicates(props.OrderItemsList, "title")
  console.log(FilteredBasketList)
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header productsCount={props.OrderItemsList.length} />
      <ProductsBasketList
        Products={FilteredBasketList}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
        removeItemFromOrderActionCreator={
          props.removeItemFromOrderActionCreator
        }
      />
      <OrderDetailsSection
        totalPrice={totalPrice}
        navigation={props.navigation}
      />
      <BonusesSection
        OrderBonusesUsed={props.UserCredentials.bonusesCount}
        bonusesUsedCount={props.OrderBonusesUsed}
        setBonusesCountActionCreator={props.setBonusesCountActionCreator}
      />
      <Footer
        navigation={props.navigation}
        allowProceed={
          FilteredBasketList.length > 0 &&
          Number(props.UserCredentials.bonusesCount || 0) >=
            Number(props.OrderBonusesUsed || 0)
        }
      />
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
