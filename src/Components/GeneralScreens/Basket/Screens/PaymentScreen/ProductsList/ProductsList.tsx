// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  Products: Array<any>
}

const ProductsList: React.FC<PropsType> = (props) => {
  return (
    <View>
      {props.Products.map((product: any) => {
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
