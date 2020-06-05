// PLUGINS IMPORTS //
import React from "react"
import { Text, Image, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const MenuNormalItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton style={styles.image_wrap}>
      <Image source={require(`../../../../../Images/Sales/menu-1.png`)} />
      <Text style={styles.text}>Пиццы</Text>
    </RectButton>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  content_wrap: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: -18.5,
  },

  image_wrap: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 18.5,
    paddingVertical: 17.115,
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

export default MenuNormalItem
