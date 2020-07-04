// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import BodyHeader from "./BodyHeader/BodyHeader"
import ProductType from "./ProductType/ProductType"
import Ingredients from "./Ingredients/Ingredients"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  product: any

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => any
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <BodyHeader
        navigation={props.navigation}
        product={props.product}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
      <View style={styles.divider} />
      <ProductType productType={props.product.productType} />
      <View style={styles.divider} />
      <Ingredients ingridientsList={props.product.ingridientsList} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: "absolute",
    bottom: 0,
    height: "70.5%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  divider: {
    borderTopColor: "#DCDCDC",
    borderTopWidth: 1,
    marginHorizontal: 30,
  },
})

export default Body
