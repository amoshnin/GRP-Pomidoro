// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductList from "./ProductsList/ProductsList"
import OrderDetailsSection from "./OrderDetailsSection/OrderDetailsSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const PaymentScreen: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  const Products = [
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
    setTotalPrice(Products.reduce((a, b) => a + (b["price"] || 0), 0))
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <ProductList Products={Products} />
      <OrderDetailsSection totalPrice={totalPrice} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default PaymentScreen
