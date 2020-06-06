// PLUGINS IMPORTS //
import React from "react"
import { View, Image, TouchableWithoutFeedback, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  title: string
  image: string
  ingridientsList: Array<string>
  productType: Array<string>
  price24: string
  price32: string
  price40: string
}

const ProductItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate("IndividualProductItem", {
          productTitle: props.title as string,
          image: props.image as string,
          productPrice24: props.price24 as string,
          productPrice32: props.price32 as string,
          productPrice40: props.price40 as string,
          productType: props.productType as Array<string>,
          ingridientsList: props.ingridientsList as Array<string>,
        })
      }
    >
      <View style={styles.container}>
        <Image source={require("../../../../../Images/product-1.png")} />
        <View style={styles.text_wrap}>
          <Text style={styles.title} weight="bold">
            {props.title}
          </Text>
          <Text style={styles.subtitle}>
            {props.ingridientsList.map((ingridient: string) => {
              return `${ingridient}, `
            })}
          </Text>
          <Text style={styles.note}>Выберите размер для заказа:</Text>
          <View style={styles.sizes_wrap}>
            <View style={{ ...styles.size_circle, height: 64, width: 64 }}>
              <Text>24см</Text>
              <View style={styles.size_circle_divider_wrap}>
                <View style={styles.size_circle_divider} />
              </View>
              <Text weight="bold">{props.price24}</Text>
              <RectButton style={styles.size_add_btn}>
                <Entypo name="plus" size={16} color="white" />
              </RectButton>
            </View>
            <View style={{ ...styles.size_circle, height: 70, width: 70 }}>
              <Text>32см</Text>
              <View style={styles.size_circle_divider_wrap}>
                <View style={styles.size_circle_divider} />
              </View>
              <Text weight="bold">{props.price32}</Text>
              <RectButton style={styles.size_add_btn}>
                <Entypo name="plus" size={16} color="white" />
              </RectButton>
            </View>
            <View style={{ ...styles.size_circle, height: 76, width: 76 }}>
              <Text>40см</Text>
              <View style={styles.size_circle_divider_wrap}>
                <View style={styles.size_circle_divider} />
              </View>
              <Text weight="bold">{props.price40}</Text>
              <RectButton style={styles.size_add_btn}>
                <Entypo name="plus" size={16} color="white" />
              </RectButton>
            </View>
          </View>
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

  divider: {
    borderWidth: 0.75,
    borderColor: "#1C1C1C",
    opacity: 0.1,
  },
})

export default ProductItem
