// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //
import ProductSnackbarComponent from "~/Components/Shared/Sections/Helpers/ProductSnackbarComponent/ProductSnackbarComponent"

// EXTRA IMPORTS //
import { Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  product: any

  containerStyle?: any
  snackBarStyle?: any

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>,
    id: string
  ) => any
}

const PizzaSizesHelper: React.FC<PropsType> = (props) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false as boolean)
  const [selectedPrice, setSelectedPrice] = useState(0 as number)

  const onOpenSnackBar = () => setSnackbarVisible(true)
  const onDismissSnackBar = () => setSnackbarVisible(false)

  console.log(props.product)
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={[styles.sizes_wrap, props.containerStyle]}>
          {props.product.sizes &&
            props.product.sizes.map(
              (size: { id: string; price: number; width: string }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.addItemToOrderActionCreator(
                        props.product.name,
                        size.price as any,
                        size.price as any,
                        props.product.image,
                        size.width,
                        0 as any,
                        props.product.ingridientsList,
                        props.product.id
                      )

                      onOpenSnackBar()
                      setSelectedPrice(size.price)
                    }}
                  >
                    <View style={styles.size_circle}>
                      <Text>{size.width}см</Text>
                      <View style={styles.size_circle_divider_wrap}>
                        <View style={styles.size_circle_divider} />
                      </View>
                      <Text weight="bold">{size.price} ₴</Text>
                      <RectButton style={styles.size_add_btn}>
                        <Entypo name="plus" size={16} color="white" />
                      </RectButton>
                    </View>
                  </TouchableOpacity>
                )
              }
            )}
        </View>
      </TouchableWithoutFeedback>
      <View style={props.snackBarStyle}>
        <ProductSnackbarComponent
          navigation={props.navigation}
          duration={1500}
          title={props.product.name}
          price={selectedPrice}
          snackbarVisible={snackbarVisible}
          onDismissSnackBar={onDismissSnackBar}
        />
      </View>
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  sizes_wrap: {
    marginTop: 17.14,
    marginBottom: 23.86,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  size_circle: {
    borderWidth: 1,
    borderColor: "#96A637",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    paddingTop: 3,
    height: 64,
    width: 64,
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
})

export default PizzaSizesHelper
