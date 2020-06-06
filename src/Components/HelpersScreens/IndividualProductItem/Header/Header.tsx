// PLUGINS IMPORTS //
import React from "react"
import { Image, StyleSheet } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  image: string | null
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <RectButton>
        <Ionicons name="ios-arrow-back" size={24} color="black" />
      </RectButton>
      <Image
        style={styles.image}
        source={require("../../../../Images/product-large-1.png")}
      />
      <RectButton>
        <Feather name="shopping-cart" size={24} color="black" />
      </RectButton>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 27.5,
    marginTop: 21,
  },

  image: {
    resizeMode: "contain",
    width: 300,
  },
})

export default Header
