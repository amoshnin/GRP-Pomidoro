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
}

const Main: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  const ProductsList = [
    {
      title: "Парерони чиз",
      image: "",
      size: 24,
      price: 99,
      count: 2,
      allowEdit: true,
    },
    {
      title: "Парерони чиз",
      image: "",
      size: 24,
      price: 99,
      count: 2,
      allowEdit: true,
    },
  ]

  useEffect(() => {
    setTotalPrice(ProductsList.reduce((a, b) => a + (b["price"] || 0), 0))
  }, [])

  const orderFunction = () => {
    props.navigation.navigate("DeliveryTimeSelectionScreen")
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header productsCount={ProductsList.length} />
      <ProductsBasketList Products={ProductsList} />
      <OrderDetailsSection
        totalPrice={totalPrice}
        navigation={props.navigation}
      />
      <BonusesSection />
      <Footer orderFunction={orderFunction} />
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
