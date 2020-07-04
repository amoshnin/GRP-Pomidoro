// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Image, TouchableWithoutFeedback, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import PizzaSizesHelper from "~/Components/Shared/Sections/Helpers/PizzaSizesHelper/PizzaSizesHelper"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  product: any

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
}

const ProductItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate("IndividualProductItem", {
          product: props.product,
        })
      }
    >
      <View style={styles.container}>
        <Image source={require("../../../../../Images/product-1.png")} />
        <View style={styles.text_wrap}>
          <Text style={styles.title} weight="bold">
            {props.product.title}
          </Text>
          <Text style={styles.subtitle}>
            {props.product.ingridientsList.map((ingridient: string) => {
              return `${ingridient}, `
            })}
          </Text>
          <Text style={styles.note}>Выберите размер для заказа:</Text>
          <PizzaSizesHelper
            navigation={props.navigation}
            snackBarStyle={{
              left: -100,
              position: "absolute",
              top: 215,
            }}
            product={props.product}
            addItemToOrderActionCreator={props.addItemToOrderActionCreator}
          />
          <View style={styles.divider} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 27.82,
  },

  text_wrap: {
    marginHorizontal: 12,
  },

  title: {
    fontSize: 20,
    letterSpacing: 0.3,
  },

  subtitle: {
    fontSize: 13,
    marginVertical: 9,
    width: 213,
  },

  note: {
    color: "black",
    opacity: 0.4,
    fontSize: 13,
    letterSpacing: 0.3,
  },

  divider: {
    borderWidth: 0.75,
    borderColor: "#1C1C1C",
    opacity: 0.1,
  },
})

export default ProductItem
