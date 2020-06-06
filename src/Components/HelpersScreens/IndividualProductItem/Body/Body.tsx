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
  productTitle: string | null
  image: string | null
  productPrice24: string | null
  productPrice32: string | null
  productPrice40: string | null
  productType: Array<string>
  ingridientsList: Array<string>
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <BodyHeader
        productTitle={props.productTitle}
        productPrice24={props.productPrice24}
        productPrice32={props.productPrice32}
        productPrice40={props.productPrice40}
      />
      <View style={styles.divider} />
      <ProductType productType={props.productType} />
      <View style={styles.divider} />
      <Ingredients ingridientsList={props.ingridientsList} />
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
