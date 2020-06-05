// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ProductListSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 23.26,
  },
})

export default ProductListSection
