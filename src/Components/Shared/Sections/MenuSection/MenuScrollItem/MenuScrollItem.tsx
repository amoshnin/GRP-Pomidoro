// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  imageURL: string
  title: string
}

const MenuScrollItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.scroll_image_wrap}>
      <Image source={require(`../../../../../Images/menu-1.png`)} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
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
