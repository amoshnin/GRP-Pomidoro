// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import Button from "../../../../Shared/Components/Button/Button"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Credentials from "./Credentials/Credentials"
import CreditCard from "./CreditCard/CreditCard"
import OrdersList from "../../Shared/OrdersList/OrdersList"
import Bonuses from "./Bonuses/Bonuses"
import LanguageSelection from "./LanguageSelection/LanguageSelection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Main: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Credentials />
      <CreditCard />
      <OrdersList
        title={"История заказов"}
        showFullList={false}
        showTiming={false}
        shwowDeliveryStatus={false}
      />

      <Button
        text={"Показавать все заказы"}
        buttonStyle={{
          borderWidth: 1,
          borderColor: "#EAEAEB",
          borderRadius: 20,
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
