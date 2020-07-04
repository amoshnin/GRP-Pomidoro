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
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => any
}

const PizzaSizesHelper: React.FC<PropsType> = (props) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false as boolean)
  const [selectedPrice, setSelectedPrice] = useState(0 as number)

  const onOpenSnackBar = () => setSnackbarVisible(true)
  const onDismissSnackBar = () => setSnackbarVisible(false)

  return (
    <>
      <TouchableWithoutFeedback>
        <View style={{ ...styles.sizes_wrap, ...props.containerStyle }}>
          <TouchableOpacity
            onPress={() => {
              props.addItemToOrderActionCreator(
                props.product.title,
                String(props.product.price24),
                "",
                "24",
                props.product.count || "0",
                props.product.ingridientsList
              )

              onOpenSnackBar()
              setSelectedPrice(props.product.price24)
            }}
          >
            <View style={{ ...styles.size_circle, height: 64, width: 64 }}>
              <Text>24см</Text>
              <View style={styles.size_circle_divider_wrap}>
                <View style={styles.size_circle_divider} />
              </View>
              <Text weight="bold">{props.product.price24} ₴</Text>
              <RectButton style={styles.size_add_btn}>
                <Entypo name="plus" size={16} color="white" />
              </RectButton>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.addItemToOrderActionCreator(
                props.product.title,
                String(props.product.price32),
                "",
                "32",
                props.product.count || "0",
                props.product.ingridientsList
              )

              onOpenSnackBar()
              setSelectedPrice(props.product.price32)
            }}
          >
            <View style={{ ...styles.size_circle, height: 70, width: 70 }}>
              <Text>32см</Text>
              <View style={styles.size_circle_divider_wrap}>
                <View style={styles.size_circle_divider} />
              </View>
              <Text weight="bold">{props.product.price32} ₴</Text>
              <RectButton style={styles.size_add_btn}>
                <Entypo name="plus" size={16} color="white" />
              </RectButton>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.addItemToOrderActionCreator(
                props.product.title,
                String(props.product.price40),
                "",
                "40",
                props.product.count || "0",
                props.product.ingridientsList
              )

              onOpenSnackBar()
              setSelectedPrice(props.product.price40)
            }}
          >
            <View style={{ ...styles.size_circle, height: 76, width: 76 }}>
              <Text>40см</Text>
              <View style={styles.size_circle_divider_wrap}>
                <View style={styles.size_circle_divider} />
              </View>
              <Text weight="bold">{props.product.price40} ₴</Text>
              <RectButton style={styles.size_add_btn}>
                <Entypo name="plus" size={16} color="white" />
              </RectButton>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <View style={props.snackBarStyle}>
        <ProductSnackbarComponent
          navigation={props.navigation}
          duration={1500}
          title={props.product.title}
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
  },

  size_circle: {
    borderWidth: 1,
    borderColor: "#96A637",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
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
})

export default PizzaSizesHelper
