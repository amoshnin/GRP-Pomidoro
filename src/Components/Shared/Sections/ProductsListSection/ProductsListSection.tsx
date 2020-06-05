// PLUGINS IMPORTS //
import React from "react"
import { View, FlatList, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"

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
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductItem
            key={item.title}
            title={item.title}
            description={item.description}
            price24={item.price24}
            price32={item.price32}
            price40={item.price40}
          />
        )}
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
