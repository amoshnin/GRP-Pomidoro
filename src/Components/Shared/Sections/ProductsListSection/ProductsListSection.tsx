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
      <ProductItem
        title={"Паперони спайс"}
        description={
          "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили"
        }
        price24={"99 ₴"}
        price32={"164 ₴"}
        price40={"199 ₴"}
      />
      <ProductItem
        title={"Паперони спайс"}
        description={
          "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили"
        }
        price24={"99 ₴"}
        price32={"164 ₴"}
        price40={"199 ₴"}
      />
      <ProductItem
        title={"Паперони спайс"}
        description={
          "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили"
        }
        price24={"99 ₴"}
        price32={"164 ₴"}
        price40={"199 ₴"}
      />
      <ProductItem
        title={"Паперони спайс"}
        description={
          "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили"
        }
        price24={"99 ₴"}
        price32={"164 ₴"}
        price40={"199 ₴"}
      />
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
