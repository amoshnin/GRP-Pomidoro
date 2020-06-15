// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  id: number

  imageURL: string
  title: string
}

const MenuScrollItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate("ProductTypeCatalog", {
          productId: props.id,
        })
      }
    >
      <View style={styles.scroll_image_wrap}>
        <Image source={{ uri: props.imageURL }} />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  scroll_image_wrap: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },

  text: {
    marginTop: 5,
    marginRight: 3,
    fontWeight: "bold",
    color: "#1A1824",
    fontSize: 15,
    textAlign: "center",
  },
})

export default MenuScrollItem
