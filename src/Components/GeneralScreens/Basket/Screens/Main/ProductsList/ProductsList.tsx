// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ProductsList: React.FC<PropsType> = (props) => {
  const ProductsBasketList = [
    {
      title: "Парерони чиз",
      image: "",
      size: "24cm",
      price: "99 ₴",
      count: 2,
      allowEdit: true,
    },
    {
      title: "Парерони чиз",
      image: "",
      size: "24cm",
      price: "99 ₴",
      count: 2,
      allowEdit: true,
    },
  ]

  return (
    <View>
      {ProductsBasketList.map((product: any) => {
        return (
          <ProductItem
            title={product.title}
            count={product.count}
            image={product.image}
            price={product.price}
            size={product.size}
            allowEdit={product.allowEdit}
          />
        )
      })}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {},
})

export default ProductsList
