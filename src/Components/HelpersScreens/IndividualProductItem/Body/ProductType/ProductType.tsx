// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  productType: Array<string>
}

const ProductType: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={16} style={styles.title}>
        Тип
      </Text>
      <View style={styles.list_wrap}>
        {props.productType.map((productType: string) => {
          return (
            <View style={styles.item_wrap} key={productType}>
              <Text style={styles.item_text}>{productType}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 23.4,
    marginBottom: 37.6,
    marginHorizontal: 30,
  },

  title: {
    color: "#1A1824",
    opacity: 0.5,
  },

  list_wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item_wrap: {
    paddingHorizontal: 21,
    paddingVertical: 6,
    marginHorizontal: 12,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "silver",
  },

  item_text: {
    letterSpacing: 0.3,
    lineHeight: 20,
  },
})

export default ProductType
