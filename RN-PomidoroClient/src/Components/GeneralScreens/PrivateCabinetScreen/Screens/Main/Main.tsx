// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Credentials from "./Credentials/Credentials"
import CreditCard from "./CreditCard/CreditCard"
import OrdersList from "./OrdersList/OrdersList"
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
    avatar: string | null
    userType: string | null
    bonusesCount: string | null
  }

  CreditCard: {
    cardNum: string
    CVV: string
    ExpDate: string
  }

  OrdersList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>

  getUserFullInfoThunkCreator: () => void
  UpdateAvatarThunkCreator: (avatar: Blob) => void
  LogoutUserThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUserFullInfoThunkCreator()
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header
        LogoutUserThunkCreator={props.LogoutUserThunkCreator}
        UserCredentials={props.UserCredentials}
        UpdateAvatarThunkCreator={props.UpdateAvatarThunkCreator}
      />
      <Credentials
        navigation={props.navigation}
        UserCredentials={props.UserCredentials}
      />
      <CreditCard navigation={props.navigation} CreditCard={props.CreditCard} />
      {props.OrdersList && props.OrdersList.length > 0 && (
        <OrdersList
          navigation={props.navigation}
          OrdersList={props.OrdersList}
        />
      )}
      <Bonuses bonusesCount={props.UserCredentials.bonusesCount} />
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
