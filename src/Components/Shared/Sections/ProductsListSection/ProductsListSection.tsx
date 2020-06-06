// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"
import EmptyProductsList from "./EmptyProductsList/EmptyProductsList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ProductListSection: React.FC<PropsType> = (props) => {
  const data = [
    {
      title: "Паперони спайс",
      description:
        "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили",
      price24: "99 ₴",
      price32: "164 ₴",
      price40: "199 ₴",
    },
    {
      title: "Паперони спайс",
      description:
        "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили",
      price24: "99 ₴",
      price32: "164 ₴",
      price40: "199 ₴",
    },
    {
      title: "Паперони спайс",
      description:
        "Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили",
      price24: "99 ₴",
      price32: "164 ₴",
      price40: "199 ₴",
    },
  ]

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map((product: any) => {
          return (
            <ProductItem
              key={product.title}
              title={product.title}
              description={product.description}
              price24={product.price24}
              price32={product.price32}
              price40={product.price40}
            />
          )
        })
      ) : (
        <EmptyProductsList />
      )}
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
