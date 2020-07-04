// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
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
  ) => any
}

const BodyHeader: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        {props.product.title}
      </Text>

      <Text size={16}>Выберите размер для заказа</Text>

      <PizzaSizesHelper
        navigation={props.navigation}
        snackBarStyle={styles.snackbar}
        product={props.product}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  title: {
    marginTop: 32,
    marginBottom: 25,
    letterSpacing: 0.3,
  },

  sizes_wrap: {
    flexDirection: "row",
    marginTop: 29.32,
    marginBottom: 35.18,
  },

  size_circle: {
    borderWidth: 1,
    borderColor: "#96A637",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
    paddingTop: 3,
  },

  size_add_btn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: "72.22%",
    right: "-5.56%",
    top: "-5.11%",
    bottom: "71.77%",
    backgroundColor: "#96A637",
    borderRadius: 56,
    height: 23,
    width: 23,
  },

  size_circle_divider_wrap: {
    flexDirection: "row",
  },

  size_circle_divider: {
    borderWidth: 0.19,
    opacity: 0.15,
    marginVertical: 1.5,
    marginHorizontal: 5,
    borderColor: "#96A637",
    width: "100%",
    flex: 1,
  },

  snackbar: {
    left: -200,
  },
})

export default BodyHeader
