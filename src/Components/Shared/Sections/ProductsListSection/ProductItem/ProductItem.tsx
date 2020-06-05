// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ProductItem: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../../../../../Images/product-1.png")} />
        <View style={styles.text_wrap}>
          <Text style={styles.title}>Паперони спайс</Text>
          <Text style={styles.subtitle}>
            Соус томатный, сыр моцарелла, паперони, перец болгарский, перец чили
          </Text>
          <Text style={styles.note}>Выберите размер для заказа:</Text>
          <View style={styles.sizes_wrap}>
            <View style={{ ...styles.size_circle, height: 65, width: 65 }}>
              <Text>24 cm</Text>
              <Text>99 R</Text>
            </View>
            <View style={{ ...styles.size_circle, height: 68, width: 68 }}>
              <Text>24 cm</Text>
              <Text>99 R</Text>
            </View>
            <View style={{ ...styles.size_circle, height: 71, width: 71 }}>
              <Text>24 cm</Text>
              <Text>99 R</Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
      </View>
    </>
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
  },

  divider: {
    borderWidth: 0.75,
    borderColor: "#1C1C1C",
    opacity: 0.1,
  },
})

export default ProductItem
