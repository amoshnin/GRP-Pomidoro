// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { TouchableOpacity, RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: any
  allowEdit: boolean

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
  removeItemFromOrderActionCreator: (
    title: string,
    size: string,
    id: string
  ) => void
}

const ProductBasketItem: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content_container}>
          <Image
            style={styles.image}
            source={require("~/Images/product-large-1.png")}
          />
          <View style={styles.item_info}>
            <Text size={16}> {props.product.title}</Text>
            <Text style={styles.price_text}>
              {props.product.size} | {props.product.price} ₴
            </Text>
          </View>
        </View>
        <View style={styles.count_wrap}>
          <RectButton
            style={[
              styles.count_btn,
              {
                backgroundColor: "#EAEAEB",
              },
            ]}
            onPress={() =>
              props.removeItemFromOrderActionCreator(
                props.product.title,
                props.product.size,
                props.product.id
              )
            }
          >
            <AntDesign name="minus" size={17} color="black" />
          </RectButton>
          <Text style={styles.count_text} size={16}>
            {props.product.count}
          </Text>
          <RectButton
            style={[styles.count_btn, { backgroundColor: "#96A637" }]}
            onPress={() =>
              props.addItemToOrderActionCreator(
                props.product.title,
                props.product.originalPrice,
                props.product.originalPrice,
                props.product.image,
                props.product.size,
                props.product.count,
                props.product.ingridientsList
              )
            }
          >
            <AntDesign name="plus" size={17} color="white" />
          </RectButton>
        </View>
      </View>
      {props.allowEdit && (
        <TouchableOpacity>
          <Text size={16} weight="bold" color="#96A637" style={styles.btn_text}>
            Изменить состав
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.divider} />
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    height: 40,
    width: 40,
    marginRight: 15,
  },

  item_info: {
    flexDirection: "column",
  },

  price_text: {
    opacity: 0.7,
    marginHorizontal: 8,
    marginTop: 6,
  },

  btn_text: {
    letterSpacing: 0.3,
    marginTop: 15,
  },

  count_wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  count_text: {
    marginHorizontal: 10,
  },

  count_btn: {
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  divider: {
    borderTopColor: "#EAEAEB",
    borderTopWidth: 1,
    marginTop: 15,
    marginBottom: 12,
  },
})

export default ProductBasketItem
