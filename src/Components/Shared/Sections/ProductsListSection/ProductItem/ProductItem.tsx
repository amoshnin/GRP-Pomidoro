// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ProductItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../../../Images/product-1.png")} />
      <View style={styles.text_wrap}>
        <Text style={styles.title}>Паперони спайс</Text>
        <Text style={styles.subtitle}>
          Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили
        </Text>
        <Text style={styles.note}>Выберите размер для заказа:</Text>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  text_wrap: {
    marginHorizontal: 12,
  },

  title: {
    fontWeight: "bold",

    fontSize: 20,
    letterSpacing: 0.3,
  },

  subtitle: {
    fontSize: 13,
    marginVertical: 9,
  },

  note: {
    color: "black",
    opacity: 0.4,
    fontSize: 13,
    letterSpacing: 0.3,
  },
})

export default ProductItem
