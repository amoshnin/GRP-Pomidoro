// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"
import EmptyProductsList from "./EmptyProductsList/EmptyProductsList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  productsList: Array<any>

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
}

const ProductListSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      {props.productsList && props.productsList.length > 0 ? (
        props.productsList.map((product: any) => {
          return (
            <ProductItem
              key={product.title}
              navigation={props.navigation}
              product={product}
              addItemToOrderActionCreator={props.addItemToOrderActionCreator}
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
