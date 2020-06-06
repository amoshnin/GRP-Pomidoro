// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductsList from "./ProductsList/ProductsList"
import PaymentSection from "./PaymentSection/PaymentSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <ProductsList />
      <PaymentSection />
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
