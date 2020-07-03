// PLUGINS IMPORTS //
import React from "react"
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

  LogoutUserThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header LogoutUserThunkCreator={props.LogoutUserThunkCreator} />
      <Credentials navigation={props.navigation} />
      <CreditCard navigation={props.navigation} />
      <OrdersList
        title={"История заказов"}
        titleStyle={{
          marginTop: 23,
        }}
        orders={[
          [
            "Паперони спайс × 2шт",
            "Четыре мяса × 1 шт ",
            "Конкорд × 1 шт",
            "Pepsi 1литр × 1 шт",
          ],
        ]}
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
        }}
        rectStyle={{
          width: 315,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
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
