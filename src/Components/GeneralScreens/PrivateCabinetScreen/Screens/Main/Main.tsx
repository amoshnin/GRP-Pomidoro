// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import Button from "../../../../Shared/Components/Button/Button"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Credentials from "./Credentials/Credentials"
import CreditCard from "./CreditCard/CreditCard"
import OrdersList from "../../../../Shared/Sections/OrdersList/OrdersList"
import Bonuses from "./Bonuses/Bonuses"
import LanguageSelection from "./LanguageSelection/LanguageSelection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  UserCredentials: {
    name: string | null
    surname: string | null
    email: string | null
    phoneNum: string | null
    region: string | null
    password: string | null
    userType: string | null
    bonusesCount: string | null
  }

  CreditCardsList: Array<{
    cardNum: string
    CVV: string
    ExpDate: string
  }>

  OrdersList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>

  getUserFullInfoThunkCreator: () => void
  LogoutUserThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUserFullInfoThunkCreator()
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header LogoutUserThunkCreator={props.LogoutUserThunkCreator} />
      <Credentials navigation={props.navigation} />
      <CreditCard navigation={props.navigation} />
      {props.OrdersList && props.OrdersList.length > 0 && (
        <>
          <OrdersList
            title={"История заказов"}
            titleStyle={{
              marginTop: 23,
            }}
            orders={props.OrdersList}
            showFullList={false}
            showTiming={false}
            shwowDeliveryStatus={false}
          />

          <Button
            onPress={() => {
              props.navigation.navigate("OrdersScreen")
            }}
            text={"Показавать все заказы"}
            buttonStyle={{
              borderRadius: 20,
              backgroundColor: "#EAEAEB",
              marginTop: 20,
              marginBottom: 36,
            }}
            rectStyle={{
              width: 315,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </>
      )}
      <Bonuses />
      <LanguageSelection />
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
