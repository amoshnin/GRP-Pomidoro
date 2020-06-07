// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductBasketItem from "./ProductBasketItem/ProductBasketItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  Products: Array<any>
}

const ProductsBasketList: React.FC<PropsType> = (props) => {
  return (
    <View>
      {props.Products.map((product: any) => {
        return (
          <ProductBasketItem
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

export default ProductsBasketList
